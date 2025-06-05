import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>{t('from')}</TableCell>
                    <TableCell>{t('to')}</TableCell>
                    <TableCell>{t('currentRateHeader')}</TableCell>
                    <TableCell>{t('realRate')}</TableCell>
                    <TableCell>{t('amountHeader')}</TableCell>
                    <TableCell>{t('resultHeader')}</TableCell>
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
