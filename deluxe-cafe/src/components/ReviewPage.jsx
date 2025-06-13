import { useState } from 'react';
import { useReviews, useSubmitReview } from '../api/useReviews';
import StarRating from './common/StarRating';

export default function ReviewPage() {
  const { data: reviews, isLoading } = useReviews();
  const { mutate, isPending } = useSubmitReview();
  const [form, setForm] = useState({ user: '', comment: '', rating: 0 });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.comment || !form.rating) {
      setError('All fields are required.');
      return;
    }
    if (form.comment.length < 6) {
      setError('Comment must be at least 6 characters long.');
      return;
    }
    setError('');
    mutate(form);
    setForm({ user: '', comment: '', rating: 0 });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold">Client Reviews</h2>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full border rounded px-3 py-2"
          value={form.user}
          onChange={(e) => setForm({ ...form, user: e.target.value })}
        />
        <textarea
          placeholder="Comment"
          className="w-full border rounded px-3 py-2"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
        <div className="flex gap-2 items-center">
          <span className="text-sm">Your review:</span>
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setForm({ ...form, rating: s })}
              className={s <= form.rating ? 'text-yellow-400' : 'text-gray-300'}
            >
              ★
            </button>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isPending}
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded"
        >
          {isPending ? 'Sending...' : 'Send review'}
        </button>
      </form>

      <div className="space-y-4">
        {isLoading ? (
          <p>Loading reviews…</p>
        ) : (
          reviews.map((r) => (
            <div key={r.id} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold">{r.user}</h4>
                <StarRating rating={r.rating} />
              </div>
              <p className="text-sm mt-2">{r.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
