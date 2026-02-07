import TableCell from "../../../../ui/Table/TableCell";
import LossRatioBadge from "../../../../ui/Badges/LossRatioBadge";
import { calculateTotals, getLossRatioColor } from '../model/calculateTotals';

const TOTAL_FIELDS = [
  'expiringTech',
  'expiringPremium',
  'renewalToTech',
  'renewalTech',
  'renewalPremium',
];

const formatCurrency = (value) =>
  `$${value.toLocaleString('en-US')}`;

const formatPercent = (value) =>
  `${(value * 100).toFixed(1)}%`;

const TotalRow = ({ policies }) => {
  const totals = calculateTotals(policies, TOTAL_FIELDS);

  return (
    <tr className="bg-slate-800/50 font-medium hover:bg-slate-700/80">
      <td colSpan={3} className="px-4" />

      <TableCell>
        TOTAL ({policies.length})
      </TableCell>

      {TOTAL_FIELDS.map((field) => (
        <TableCell key={field}>
          {formatCurrency(totals[field])}
        </TableCell>
      ))}

      <TableCell>
        {formatPercent(totals.rateChange)}
      </TableCell>

      <TableCell className="px-4">
        <LossRatioBadge
          ratio={formatPercent(totals.lossRatio)}
          color={getLossRatioColor(totals.lossRatio)}
        />
      </TableCell>

      <TableCell />
    </tr>
  );
};

export default TotalRow;
