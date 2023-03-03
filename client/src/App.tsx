import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IProduct } from 'types';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import GlobalStyles, { colors } from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

function App() {
  
  const product: IProduct = {
    id: 1,
    name: 'Frontend Mentor',
  }
  
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/fm" element={<ProductPage product={product} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
