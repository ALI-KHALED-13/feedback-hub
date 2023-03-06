import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import GlobalStyles, { colors } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
