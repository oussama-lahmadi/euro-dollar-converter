import React, {useEffect, useState} from 'react';
import {
    Box,
    FormControl,
    IconButton,
    TextField
} from "@mui/material";

import {SwapHoriz} from "@mui/icons-material";
import {GLOBAL_CONF} from "../config/globalConf";
import CurrencySelector from "./CurrencySelector";
import {calculateAmount} from "../services/calculator";
type Currency = 'EUR' | 'USD' | 'DTN';

interface ConvertorProps {
    rates: { USD: number; DTN: number };
    realUsdRate: number;
    onConversion: (value: ConversionResult) => void;
}

export interface ConversionResult {
    amount: number;
    value: number;
    fromCurrency: Currency;
    toCurrency: Currency;
    rate: number;
    realRate: number;
}

const Convertor = ({rates, realUsdRate, onConversion }: ConvertorProps) => {
    const [amount, setAmount] = useState<number>(0);
    const [fromCurrency, setFromCurrency] = useState<Currency>(GLOBAL_CONF.CURRENCIES.EUR as Currency);
    const [toCurrency, setToCurrency] = useState< Currency>(GLOBAL_CONF.CURRENCIES.USD as Currency);
    const [resultAmount, setResultAmount] = useState<number>(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setAmount(value);
    };

    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setAmount(resultAmount)
    }

    useEffect(() => {
        updateResult(amount);

    }, [rates, amount, fromCurrency, toCurrency])

    const getRate = (from: Currency, to: Currency, useReal = false): number => {
        const usdRate = useReal ? realUsdRate : rates.USD;
        const dtnRate = rates.DTN;

        if (from === to) return 1;
        switch (from) {
            case GLOBAL_CONF.CURRENCIES.EUR:
                if (to === GLOBAL_CONF.CURRENCIES.USD) return usdRate;
                if (to === GLOBAL_CONF.CURRENCIES.DTN) return dtnRate;
                break;
            case GLOBAL_CONF.CURRENCIES.USD:
                if (to === GLOBAL_CONF.CURRENCIES.EUR) return 1 / usdRate;
                if (to === GLOBAL_CONF.CURRENCIES.DTN) return (1 / usdRate) * dtnRate;
                break;
            case GLOBAL_CONF.CURRENCIES.DTN:
                if (to === GLOBAL_CONF.CURRENCIES.EUR) return 1 / dtnRate;
                if (to === GLOBAL_CONF.CURRENCIES.USD) return (1 / dtnRate) * usdRate;
                break;
        }
        return 1;
    };

    const updateResult = (value: number) => {
        const rate = getRate(fromCurrency, toCurrency);
        const realRate = getRate(fromCurrency, toCurrency, true);
        const result = calculateAmount(value, rate, 'MULT');
        setResultAmount(result);
        if(amount !== 0) {
            onConversion({
                amount: amount,
                value: result,
                fromCurrency: fromCurrency,
                toCurrency: toCurrency,
                rate: rate,
                realRate: realRate
            });
        }

    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <TextField
                    label="Amount"
                    value={amount}
                    type={"number"}
                    onChange={handleInputChange}
                    variant="outlined"
                    placeholder="Enter the amount"
                />
            </FormControl>

            <CurrencySelector currency={fromCurrency} label={'From'} onChange={setFromCurrency} />
            <IconButton color="primary" sx={{ m: 1 }} onClick={handleSwapCurrencies}>
                <SwapHoriz />
            </IconButton>

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                <TextField
                    label="Result"
                    value={resultAmount.toFixed(2)}
                    type={"number"}
                    disabled
                    variant="outlined"
                    placeholder=""
                />
            </FormControl>

            <CurrencySelector currency={toCurrency} label={'To'} onChange={setToCurrency} />

        </Box>
    );
};

export default Convertor;
