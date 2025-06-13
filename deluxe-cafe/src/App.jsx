import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CafePage from './components/CafePage';
import MenuPage from './components/MenuPage';
import OrderPage from './components/OrderPage';
import ReviewPage from './components/ReviewPage';
import MainLayout from './layout/MainLayout';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<CafePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/reviews" element={<ReviewPage />} />
        </Routes>
      </MainLayout>
      </CartProvider>
    </Router>
  );
}

export default App;
