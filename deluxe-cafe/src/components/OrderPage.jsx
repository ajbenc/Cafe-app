import { useCart } from '../hooks/useCart';
import { useCreateOrder } from '../api/useCreateOrder';

export default function OrderPage() {
  const { cart, dispatch } = useCart();
  const { mutate, isPending } = useCreateOrder();

  const total = cart.items.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleOrder = () => {
    if (cart.items.length === 0) return;

    mutate(
      { items: cart.items, total },
      {
        onSuccess: () => {
          alert('Oder successfully sent');
          // This clears the cart after the offer is sent
          dispatch({ type: 'CLEAR_CART' });
        },
        onError: () => {
          alert('Error al enviar el pedido');
        },
      }
    );
  };

  if (cart.items.length === 0) {
    return <p className="text-center">Your cart is empty</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-2xl font-bold mb-4">Resume of the order </h2>
      {cart.items.map((item) => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-500 hover:underline text-sm"
          >
            Delete
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-lg">
        Total: ${total.toFixed(2)}
      </div>

      <button
        onClick={handleOrder}
        disabled={isPending}
        className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
      >
        {isPending ? 'Sending order...' : 'Send order'}
      </button>
    </div>
  );
}
