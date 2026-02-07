const parseCurrency = (value) =>
  Number(value?.replace(/[$,]/g, '')) || 0;

const parsePercent = (value) =>
  Number(value?.replace('%', '')) / 100 || 0;

export const calculateTotals = (policies, fields) => {
  const totals = {};
  let totalExpiringPremium = 0;
  let totalRenewalPremium = 0;
  let totalLosses = 0;
  let weightedRateSum = 0;

  fields.forEach((field) => {
    totals[field] = policies.reduce(
      (sum, p) => sum + parseCurrency(p[field]),
      0
    );
  });

  policies.forEach((policy) => {
    const expPrem = parseCurrency(policy.expiringPremium);
    const renPrem = parseCurrency(policy.renewalPremium);
    const lossRatio = parsePercent(policy.lossRatio);
    const rateChange = parsePercent(policy.rateChange);

    totalExpiringPremium += expPrem;
    totalRenewalPremium += renPrem;
    totalLosses += renPrem * lossRatio;
    weightedRateSum += expPrem * rateChange;
  });

  totals.rateChange =
    totalExpiringPremium > 0
      ? weightedRateSum / totalExpiringPremium
      : 0;

  totals.lossRatio =
    totalRenewalPremium > 0
      ? totalLosses / totalRenewalPremium
      : 0;

  return totals;
};

export const getLossRatioColor = (ratio) => {
  if (ratio < 0.4) return 'green';
  if (ratio < 0.6) return 'yellow';
  return 'red';
};
