import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

// Mock product data - in a real app, this would come from an API or props
const product = {
  id: 1,
  name: 'Vestido Floral Midi',
  price: 299.90,
  description: 'Vestido midi em tecido leve com estampa floral. Perfeito para ocasiões especiais e uso diário. Com decote V e mangas 3/4.',
  image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80',
  images: [
    'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1566174053879-31528523f8c5?auto=format&fit=crop&q=80',
  ],
  colors: ['Rosa', 'Azul', 'Branco'],
  sizes: ['P', 'M', 'G', 'GG'],
  isNew: true,
};

export default function ProductDetail() {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    // Create a combined object
    const productWithColor = {
      ...product,
      selectedColor: selectedColor
    };
    
    addToCart(productWithColor);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                  mainImage === image ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setMainImage(image)}
              >
                <img
                  src={image}
                  alt={`${product.name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          {product.isNew && (
            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">
              Novo
            </span>
          )}
          <h1 className="text-3xl font-montserrat font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold mb-6">
            R$ {product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-montserrat font-medium mb-3">Cor: {selectedColor}</h3>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`px-4 py-2 border rounded-md ${
                    selectedColor === color
                      ? 'border-primary text-primary'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <h3 className="font-montserrat font-medium mb-3">Tamanho: {selectedSize}</h3>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 flex items-center justify-center border rounded-md ${
                    selectedSize === size
                      ? 'border-primary text-primary'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart and Wishlist */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="btn-primary flex-1 py-3 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="h-5 w-5" />
              Adicionar ao Carrinho
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:border-primary hover:text-primary">
              <Heart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}