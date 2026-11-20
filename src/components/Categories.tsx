
const categories = [
  {
    id: 1,
    title: 'Sandálias',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    id: 2,
    title: 'Roupas',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    id: 3,
    title: 'Maquiagem',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80',
    link: '#',
  },
];

export default function Categories() {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
        Nossas Categorias
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <a
            key={category.id}
            href={category.link}
            className="group relative h-96 overflow-hidden rounded-lg"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-montserrat font-bold text-white">
                {category.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}