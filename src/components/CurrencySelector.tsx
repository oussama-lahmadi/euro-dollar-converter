import React from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    ListItemIcon
} from '@mui/material';
import {GLOBAL_CONF} from "../config/globalConf";
import EuroIcon from "@mui/icons-material/Euro";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

interface CurrencySelectorProps {
    currency: 'EUR' | 'USD';
    label: string;
}

const CurrencySelector = ({ currency, label }: CurrencySelectorProps) => {


    return (
        <FormControl variant="outlined" sx={{ m: 1 }}>
            <InputLabel>{label}</InputLabel>
            <Select value={currency} onChange={(e) => {}} label={label} disabled>
                <MenuItem value={GLOBAL_CONF.CURRENCIES.EUR}><ListItemIcon><EuroIcon/></ListItemIcon>EUR</MenuItem>
                <MenuItem value={GLOBAL_CONF.CURRENCIES.USD}><ListItemIcon><AttachMoneyIcon/></ListItemIcon>USD</MenuItem>
            </Select>
        </FormControl>
    );
};

export default CurrencySelector;
