import React from 'react'
import TableRow from '../../../../ui/Table/TableRow';
import TableCell from '../../../../ui/Table/TableCell';
import BadgeStatus from '../../../../ui/Badges/BadgeStatus';
import InfoButton from '../../../../ui/InfoButton';
import { Avatar } from '../../../../ui/Avatar';
import ClientLineCell from '../../../../ui/Table/ClientLineCell';
import TableHeader from '../../../../ui/Table/TableHeader';

const headers = [
  'Originator',
  'Client/Line',
  'Type',
  'STATUS',
  'Created',
  ''
];

const WorkQueueTable = ({ workQueue }) => {
  return (
    <table className="w-full min-w-[700px]">
      <TableHeader columns={headers} />
      <tbody>
        {workQueue.map((policy, index) => (
          <TableRow key={policy.id} index={index}>
            <TableCell className='pl-2'>
              <div className="flex items-center gap-3">
                <Avatar initials={policy.originator} name={policy.originatorName} size='sm' />
                <span className="text-slate-300 text-sm">{policy.originatorName}</span>
              </div>
            </TableCell>
            <TableCell>
              <ClientLineCell
                title={policy.client}
                subtitle={policy.line}
              />
            </TableCell>
            <TableCell>{policy.type}</TableCell>
            <TableCell><BadgeStatus status={policy.status} /></TableCell>
            <TableCell>{policy.created}</TableCell>
            <TableCell><InfoButton /></TableCell>
          </TableRow>
        ))}
      </tbody>
    </table>
  )
}

export default WorkQueueTable