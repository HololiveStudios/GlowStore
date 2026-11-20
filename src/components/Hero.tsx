
const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
    title: 'Nova Coleção Verão',
    subtitle: 'Descubra peças exclusivas para seus looks',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80',
    title: 'Tendências 2024',
    subtitle: 'Estilo e sofisticação para você',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
    title: 'Looks Especiais',
    subtitle: 'Para todas as ocasiões',
  },
];

export default function Hero() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={slides[0].image}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-4">
            {slides[0].title}
          </h1>
          <p className="text-xl mb-8">{slides[0].subtitle}</p>
          <button className="btn-primary text-lg px-8 py-3">
            Compre Agora
          </button>
        </div>
      </div>
    </div>
  );
}