export default function StarRating({ rating = 0, max = 5 }) {
  return (
    <span>
      {[...Array(max)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </span>
  );
}