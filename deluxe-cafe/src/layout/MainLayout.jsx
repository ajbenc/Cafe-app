import { Link } from 'react-router-dom';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">☕ Deluxe Café</h1>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/order">Orders</Link>
          <Link to="/reviews">Reviews</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
