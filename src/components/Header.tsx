import React from 'react';
import {AppBar, Toolbar, Typography, Select, MenuItem} from '@mui/material';
import type {SelectChangeEvent} from '@mui/material/Select';
import {useTranslation} from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t('appName')}
        </Typography>
        <Typography sx={{mr:1}}>{t('language')}</Typography>
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          variant="standard"
          sx={{ color: 'white', borderBottom: '1px solid white' }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
