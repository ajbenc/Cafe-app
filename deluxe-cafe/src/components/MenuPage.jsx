import { useProducts } from '../api/useProducts';
import { useCart } from '../hooks/useCart'; // Fixed import name

export default function MenuPage() {
  const { data: products, isLoading, isError } = useProducts();
  const { dispatch } = useCart(); // Use the cart context

  if (isLoading) return <p className="text-center">Loading menu...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading menu.</p>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow rounded-lg overflow-hidden">
          <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-amber-600">${product.price.toFixed(2)}</span>
              <button
                onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-1 rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
