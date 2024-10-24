import React, { useEffect, useState } from 'react';
import {Box, TextField, Typography} from "@mui/material";
import {GLOBAL_CONF} from "../config/globalConf";
import {isDeviationMoreThanLimit} from "../services/calculator";


const ExchangeRateDisplay = ({rate, onRateChange, onRealRateUpdate}: {rate: number, onRealRateUpdate: (value: number) => void, onRateChange: (value: number) => void}) => {
    const [currentRate, setCurrentRate] = useState<number>(rate);
    const [fixedRate, setFixedRate] = useState<number | null>(null);
    const [fixedRateError, setFixedRateError] = useState<string>('');

    // Reset the fixed rate if the deviation > 2%
    const isFixedRateAllowed = (): boolean => {
        if(fixedRate) {
            const isAllowed = !isDeviationMoreThanLimit(fixedRate, currentRate, GLOBAL_CONF.RESET_FIXED_RATE_LIMIT)
            setFixedRateError(!isAllowed ? `Fixed rate disabled: ${GLOBAL_CONF.RESET_FIXED_RATE_LIMIT}% deviation exceeded` : '')
            return isAllowed;
        }
        return false
    };

    const handleFixedRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newRate = parseFloat(e.target.value);
        if (!isNaN(newRate) ) {
            setFixedRate(newRate);
        }
    };

    // Update rate every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentRate((prevRate: number) => {
                return prevRate + (Math.random() * 0.1 - 0.05);
            });
        }, GLOBAL_CONF.UPDATE_RATE_INTERVAL);

        return () => clearInterval(intervalId);
    }, [rate]);

    useEffect(() => {
        if(!fixedRate) {
            onRateChange(currentRate)
        } else {
            if(!isFixedRateAllowed()) {
                onRateChange(currentRate)
            }
        }
        onRealRateUpdate(currentRate)
    },[currentRate]);

    useEffect(() => {
       if(fixedRate && isFixedRateAllowed()) {
           onRateChange(fixedRate)
       }
    },[fixedRate]);

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" component="h2" style={{ marginTop: '20px', width: '50%' }}>
                    Current rate: <span data-testid="exchange-rate">{currentRate.toFixed(2)}</span>
                </Typography>
                <TextField
                    label="Set Fixed Exchange Rate"
                    variant="outlined"
                    value={fixedRate ?? ''}
                    onChange={handleFixedRateChange}
                    type="number"
                    fullWidth
                />
            </Box>
            {fixedRateError && <Typography color="error">{fixedRateError}</Typography>}
        </>



);
};

export default ExchangeRateDisplay;
