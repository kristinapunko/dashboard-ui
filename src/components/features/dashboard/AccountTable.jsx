import React from 'react'
import TableRow from '../../ui/Table/TableRow';
import TableCell from '../../ui/Table/TableCell';
import InfoButton from '../../ui/InfoButton';
import BadgeStatus from '../../ui/Badges/BadgeStatus';
import WinnabilityBadge from '../../ui/Badges/WinnabilityBadge';
import LossRatioBadge from '../../ui/Badges/LossRatioBadge';
import TableHeader from '../../ui/Table/TableHeader';
import AppetiteBadge from '../../ui/Badges/AppetiteBadge';
import ClientLineCell from '../../ui/Table/ClientLineCell';

const headers = [
  'ACCOUNT/NAME/TYPE',
  'LINE',
  'BROKER',
  'RENEWAL DATE',
  'PREMIUM',
  'RATED PREMIUM',
  'LOSS RATIO',
  'APPETITE',
  'STATUS',
  'TRIACE',
  'WINNABILITY',
  ''
];

const AccountTable = ({ accounts }) => {
  return (
    <table className="w-full min-w-[1200px]">
      <TableHeader columns={headers} className='pl-2' />
      <tbody>
        {accounts.map((policy, index) => (
          <TableRow key={policy.id} index={index}>
            <TableCell className='pl-4'>
              <ClientLineCell
                title={policy.accountName}
                subtitle={policy.accountType}
              />
            </TableCell>
            <TableCell>{policy.line}</TableCell>
            <TableCell>{policy.broker}</TableCell>
            <TableCell align='center'>{policy.renewalDate}</TableCell>
            <TableCell color='text-blue-500' className='font-semibold' align="center">{policy.premiumFormatted}</TableCell>
            <TableCell align="right" className='px-2'>{policy.ratedPremiumFormatted}</TableCell>
            <TableCell align="center"><LossRatioBadge ratio={policy.lossRatio} color={policy.lossRatioColor} /></TableCell>
            <TableCell className='px-3'><AppetiteBadge level={policy.appetite} /></TableCell>
            <TableCell><BadgeStatus status={policy.status} /></TableCell>
            <TableCell align="center"><WinnabilityBadge text={policy.triageScore} textOnly /></TableCell>
            <TableCell><WinnabilityBadge text={policy.label} /></TableCell>
            <TableCell><InfoButton /></TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  )
}

export default AccountTable