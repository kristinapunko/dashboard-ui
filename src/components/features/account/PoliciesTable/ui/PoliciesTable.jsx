import React from 'react'
import TableRow from '../../../../ui/Table/TableRow';
import TableCell from '../../../../ui/Table/TableCell';
import BadgeStatus from '../../../../ui/Badges/BadgeStatus';
import TotalRow from './TotalRow';
import LossRatioBadge from '../../../../ui/Badges/LossRatioBadge';
import InfoButton from '../../../../ui/InfoButton';
import ClientLineCell from '../../../../ui/Table/ClientLineCell';
import TableHeader from '../../../../ui/Table/TableHeader';

const headers = [
  'LINE',
  'EFF DATE',
  'EXP DATE',
  'STATUS',
  'EXPIRING TECH',
  'EXPIRING PREMIUM',
  'RENEWAL TO TECH',
  'RENEWAL TECH',
  'RENEWAL PREMIUM',
  'RATE CHANGE',
  'LOSS RATIO',
  ''
];

const PoliciesTable = ({ policies }) => {
  return (
    <table className="w-full min-w-[1200px]">
      <TableHeader columns={headers} />
      <tbody>
        {policies.map((policy, index) => (
          <TableRow key={policy.id} index={index}>
            <TableCell className="px-4">
              <ClientLineCell
                title={policy.line}
                subtitle={policy.lineNumber}
                icon={policy.lineIcon}
              />
            </TableCell>
            <TableCell>{policy.effDate}</TableCell>
            <TableCell>{policy.expDate}</TableCell>

            <TableCell><BadgeStatus status={policy.status} /></TableCell>

            <TableCell>{policy.expiringTech}</TableCell>

            <TableCell>{policy.expiringPremium}</TableCell>

            <TableCell>{policy.renewalToTech}</TableCell>

            <TableCell>{policy.renewalTech}</TableCell>

            <TableCell>{policy.renewalPremium}</TableCell>

            <TableCell>
              <span className={`text-sm ${policy.rateChange === 'N/A'
                  ? 'text-slate-500'
                  : parseFloat(policy.rateChange) > 8
                    ? 'text-red-400'
                    : 'text-slate-300'
                }`}>
                {policy.rateChange}
              </span>
            </TableCell>

            <TableCell className="px-4">
              <LossRatioBadge ratio={policy.lossRatio} color={policy.lossRatioColor} />
            </TableCell>

            <TableCell><InfoButton /></TableCell>
          </TableRow>
        ))}
        <TotalRow key="total-row" policies={policies} />
      </tbody>
    </table>
  )
}

export default PoliciesTable