
export default function Newsletter() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-montserrat font-bold mb-4">
          Receba Ofertas Exclusivas
        </h2>
        <p className="text-gray-600 mb-8">
          Inscreva-se e ganhe 10% OFF em sua primeira compra
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Quero Receber
          </button>
        </form>
      </div>
    </section>
  );
}