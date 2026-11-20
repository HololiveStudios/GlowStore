import { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, cartItems } = useCart();

  return (
    <header className="w-full">
      {/* Free Shipping Banner */}
      <div className="bg-secondary text-white text-center py-2 text-sm">
        Frete Grátis em compras acima de R$299
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-montserrat font-bold text-center flex-1 lg:flex-none">
            GLOWSTORE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <Link to="/" className="nav-link">Novidades</Link>
            <Link to="/" className="nav-link">Sandálias</Link>
            <Link to="/" className="nav-link">Roupas</Link>
            <Link to="/" className="nav-link">Acessórios</Link>
            <Link to="/" className="nav-link">Ofertas</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-primary transition-colors">
              <Heart className="h-5 w-5" />
            </button>
            <button 
              className="p-2 hover:text-primary transition-colors relative"
              onClick={openCart}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20">
          <nav className="container mx-auto px-4">
            <Link to="/" className="block py-4 border-b" onClick={() => setIsMenuOpen(false)}>Novidades</Link>
            <Link to="/" className="block py-4 border-b" onClick={() => setIsMenuOpen(false)}>Sandálias</Link>
            <Link to="/" className="block py-4 border-b" onClick={() => setIsMenuOpen(false)}>Roupas</Link>
            <Link to="/" className="block py-4 border-b" onClick={() => setIsMenuOpen(false)}>Acessórios</Link>
            <Link to="/" className="block py-4 border-b" onClick={() => setIsMenuOpen(false)}>Ofertas</Link>
          </nav>
        </div>
      )}
    </header>
  );
}