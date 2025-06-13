export default function CafePage() {
  return (
    <section className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1950&q=80)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to Deluxe Café</h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
             Unique coffee experiences, exquisite flavors, and a luxurious atmosphere. Discover our select menu of drinks and desserts.
          </p>
          <a href="/menu" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg text-lg transition">
            Watch our menu
          </a>
        </div>
      </div>
    </section>
  );
}
