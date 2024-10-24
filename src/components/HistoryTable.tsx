import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

interface ConversionRecord {
    from: string;
    to: string;
    rate: number;
    realRate: number;
    amount: number;
    result: number;
}

interface HistoryTableProps {
    history: ConversionRecord[];
}

const HistoryTable = ({ history }: HistoryTableProps) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                    <TableCell>Current Rate</TableCell>
                    <TableCell>Real Rate</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Result</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {history.map((record, index) => (
                    <TableRow key={index} data-testid="history-row">
                        <TableCell>{record.from}</TableCell>
                        <TableCell>{record.to}</TableCell>
                        <TableCell>{record.rate}</TableCell>
                        <TableCell>{record.realRate}</TableCell>
                        <TableCell>{record.amount}</TableCell>
                        <TableCell>{record.result}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default HistoryTable;
