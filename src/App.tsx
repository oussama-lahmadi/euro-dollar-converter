import React from 'react';
import './App.css';
import {Container, CssBaseline} from "@mui/material";
import ConvertorPage from './pages/ConvertorPage';

function App() {
  return (
      <div>
        <CssBaseline />
        <Container >
          <ConvertorPage />
        </Container>
      </div>
  );
}

export default App;
