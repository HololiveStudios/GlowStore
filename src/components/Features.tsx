
import { Truck, CreditCard, RefreshCw, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Em compras acima de R$299',
  },
  {
    icon: CreditCard,
    title: 'Parcelamento',
    description: 'Em até 10x sem juros',
  },
  {
    icon: RefreshCw,
    title: 'Troca Fácil',
    description: 'Até 30 dias para trocar',
  },
  {
    icon: HeadphonesIcon,
    title: 'Atendimento 24h',
    description: 'Suporte sempre disponível',
  },
];

export default function Features() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}