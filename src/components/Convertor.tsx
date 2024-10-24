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
type Currency = 'EUR' | 'USD';

interface ConvertorProps {
    rate: number;
    onConversion: (value: ConversionResult) => void;
}

export interface ConversionResult {
    amount: number;
    value: number;
    fromCurrency: Currency;
    toCurrency: Currency;
}

const Convertor = ({rate, onConversion }: ConvertorProps) => {
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

    }, [rate, amount])

    const updateResult = (value: number) => {
        let operation: 'MULT' | 'DIV' = fromCurrency === GLOBAL_CONF.CURRENCIES.EUR ?  'MULT': 'DIV';
        const result = calculateAmount(value, rate, operation);
        setResultAmount(result);
        if(amount !== 0) {
            onConversion({
                amount: amount,
                value: result,
                fromCurrency: fromCurrency,
                toCurrency: toCurrency
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

            <CurrencySelector currency={fromCurrency} label={'From'} />
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

            <CurrencySelector currency={toCurrency} label={'To'} />

        </Box>
    );
};

export default Convertor;
