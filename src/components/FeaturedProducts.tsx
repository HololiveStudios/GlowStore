import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const products = [
  {
    id: 1,
    name: 'Vestido Floral Midi',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80',
    isNew: true,
    colors: ['Rosa', 'Azul', 'Branco'],
  },
  {
    id: 2,
    name: 'Sandália Elegance',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
    isNew: false,
    colors: ['Preto', 'Nude', 'Dourado'],
  },
  {
    id: 3,
    name: 'Blusa Romance',
    price: 159.90,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
    isNew: true,
    colors: ['Branco', 'Rosa'],
  },
  {
    id: 4,
    name: 'Paleta de Sombras',
    price: 129.90,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80',
    isNew: false,
    colors: [],
  },
  {
    id: 5,
    name: 'Calça Wide Leg',
    price: 259.90,
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&q=80',
    isNew: true,
    colors: ['Preto', 'Bege'],
  },
  {
    id: 6,
    name: 'Bolsa Estruturada',
    price: 349.90,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    isNew: false,
    colors: ['Caramelo', 'Preto'],
  },
  {
    id: 7,
    name: 'Blazer Oversized',
    price: 399.90,
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&q=80',
    isNew: true,
    colors: ['Preto', 'Bege'],
  },
  {
    id: 8,
    name: 'Conjunto Fitness',
    price: 219.90,
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80',
    isNew: false,
    colors: ['Rosa', 'Preto', 'Azul'],
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Create a combined object
    const productWithColor = {
      ...product,
      selectedColor: product.colors[0] || 'Único'
    };
    
    addToCart(productWithColor);
  };

  const toggleFavorite = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link 
              to={`/product/${product.id}`} 
              key={product.id} 
              className="product-card group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-[3/4] object-cover rounded-t-lg"
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    Novo
                  </span>
                )}
                <button 
                  className={`absolute top-4 right-4 p-2 bg-white rounded-full shadow-md transition-colors ${favorites.includes(product.id) ? 'text-red-500' : 'hover:text-primary'}`}
                  onClick={(e) => toggleFavorite(product.id, e)}
                  aria-label={favorites.includes(product.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                  <Heart className="h-5 w-5" fill={favorites.includes(product.id) ? "currentColor" : "none"} />
                </button>
                <div className={`absolute inset-0 bg-black/20 transition-opacity ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <button 
                      className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                      onClick={(e) => handleAddToCart(product, e)}
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-b-lg shadow-sm">
                <h3 className="font-montserrat font-medium text-lg mb-2">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold mb-2">
                  R$ {product.price.toFixed(2)}
                </p>
                {product.colors.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span key={index} className="text-sm text-gray-600">
                        {color}{index < product.colors.length - 1 ? ',' : ''}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}