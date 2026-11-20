import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';

const steps = ['Endereço', 'Pagamento', 'Confirmação'];

export default function Checkout() {
  const { cartItems, cartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Endereço
    name: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    // Pagamento
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-center">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                index <= currentStep
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-12 ${
                  index < currentStep ? 'bg-primary' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between px-4">
        {steps.map((step, index) => (
          <span
            key={step}
            className={`text-sm ${
              index <= currentStep ? 'text-primary' : 'text-gray-500'
            }`}
          >
            {step}
          </span>
        ))}
      </div>
    </div>
  );

  const renderAddressForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
            CEP
          </label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Endereço
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Número
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="complement" className="block text-sm font-medium text-gray-700">
            Complemento
          </label>
          <input
            type="text"
            id="complement"
            name="complement"
            value={formData.complement}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700">
            Bairro
          </label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Cidade
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
          >
            <option value="">Selecione...</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            {/* Adicionar outros estados */}
          </select>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button type="submit" className="btn-primary px-8 py-3">
          Continuar para Pagamento
        </button>
      </div>
    </form>
  );

  const renderPaymentForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border p-4">
        <div className="mb-4 flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-primary" />
          <h3 className="font-montserrat font-semibold">Cartão de Crédito</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Número do Cartão
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">
              Nome no Cartão
            </label>
            <input
              type="text"
              id="cardName"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700">
                Validade
              </label>
              <input
                type="text"
                id="cardExpiry"
                name="cardExpiry"
                placeholder="MM/AA"
                value={formData.cardExpiry}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="cardCvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cardCvv"
                name="cardCvv"
                value={formData.cardCvv}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="installments" className="block text-sm font-medium text-gray-700">
              Parcelas
            </label>
            <select
              id="installments"
              name="installments"
              value={formData.installments}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none"
            >
              <option value="1">1x de R$ {cartTotal.toFixed(2)} sem juros</option>
              <option value="2">2x de R$ {(cartTotal / 2).toFixed(2)} sem juros</option>
              <option value="3">3x de R$ {(cartTotal / 3).toFixed(2)} sem juros</option>
              <option value="4">4x de R$ {(cartTotal / 4).toFixed(2)} sem juros</option>
              <option value="5">5x de R$ {(cartTotal / 5).toFixed(2)} sem juros</option>
              <option value="6">6x de R$ {(cartTotal / 6).toFixed(2)} sem juros</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button type="submit" className="btn-primary px-8 py-3">
          Finalizar Pedido
        </button>
      </div>
    </form>
  );

  const renderConfirmation = () => (
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h2 className="mb-2 font-montserrat text-2xl font-bold">
        Pedido Confirmado!
      </h2>
      <p className="mb-6 text-gray-600">
        Seu pedido foi realizado com sucesso. Em breve você receberá um e-mail com os detalhes.
      </p>
      <div className="mx-auto max-w-md rounded-lg border p-4">
        <h3 className="mb-4 font-montserrat font-semibold">Resumo do Pedido</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Produtos:</span>
            <span>R$ {cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Frete:</span>
            <span className="text-green-500">Grátis</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>R$ {cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-4xl px-4">
        {renderStepIndicator()}
        <div className="rounded-lg bg-white p-6 shadow-md">
          {currentStep === 0 && renderAddressForm()}
          {currentStep === 1 && renderPaymentForm()}
          {currentStep === 2 && renderConfirmation()}
        </div>
      </div>
    </div>
  );
}