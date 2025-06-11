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
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

type Currency = 'EUR' | 'USD' | 'DTN';

interface CurrencySelectorProps {
    currency: Currency;
    label: string;
    onChange: (currency: Currency) => void;
}

const CurrencySelector = ({ currency, label, onChange }: CurrencySelectorProps) => {


    return (
        <FormControl variant="outlined" sx={{ m: 1 }}>
            <InputLabel>{label}</InputLabel>
            <Select value={currency} onChange={(e) => onChange(e.target.value as Currency)} label={label}>
                <MenuItem value={GLOBAL_CONF.CURRENCIES.EUR}><ListItemIcon><EuroIcon/></ListItemIcon>EUR</MenuItem>
                <MenuItem value={GLOBAL_CONF.CURRENCIES.USD}><ListItemIcon><AttachMoneyIcon/></ListItemIcon>USD</MenuItem>
                <MenuItem value={GLOBAL_CONF.CURRENCIES.DTN}><ListItemIcon><CurrencyExchangeIcon/></ListItemIcon>DTN</MenuItem>
            </Select>
        </FormControl>
    );
};

export default CurrencySelector;
