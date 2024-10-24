import React, {useState} from 'react';
import {
    Container,
    Typography
} from '@mui/material';
import ExchangeRateDisplay from "../components/ExchangeRateDisplay";
import HistoryTable from "../components/HistoryTable";
import {GLOBAL_CONF} from "../config/globalConf";
import Convertor, {ConversionResult} from "../components/Convertor";


const ConvertorPage = () => {
    const [rate, setRate] = useState<number>(GLOBAL_CONF.INITIAL_RATE);
    const [realRate, setRealRate] = useState<number>(GLOBAL_CONF.INITIAL_RATE);
    const [history, setHistory] = useState<any[]>([]);


    const hadleConversionDone = (conversion: ConversionResult) => {
        setHistory((prev) => [
            {
                from: conversion.fromCurrency,
                to: conversion.toCurrency,
                rate: rate.toFixed(2),
                realRate: realRate.toFixed(2),
                amount: conversion.amount.toFixed(2),
                result: conversion.value.toFixed(2)
            },
            ...prev.slice(-4),

        ]);
    }




    return (
        <Container maxWidth={'lg'} style={{ marginTop: '50px' }}>
            <Typography variant="h4">Euro to Dollar Converter</Typography>
            <ExchangeRateDisplay rate={rate} onRateChange={setRate} onRealRateUpdate={setRealRate}  />
            <Convertor rate={rate} onConversion={hadleConversionDone} />
            <HistoryTable history={history} />
        </Container>
    );
};

export default ConvertorPage;
