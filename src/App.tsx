import React from 'react';
import './App.css';
import {Container, CssBaseline} from "@mui/material";
import ConvertorPage from './pages/ConvertorPage';
import Header from './components/Header';

function App() {
  return (
      <div>
        <CssBaseline />
        <Header />
        <Container >
          <ConvertorPage />
        </Container>
      </div>
  );
}

export default App;
