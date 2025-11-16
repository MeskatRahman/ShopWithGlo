import React from 'react';
import Image from 'next/image';

const paymentMethods = [
  { name: 'Visa', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' },
  { name: 'Mastercard', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png' },
  { name: 'PayPal', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png' },
  { name: 'Stripe', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png' },
  { name: 'SSL Secure', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/SSL_Secure_Connection.svg/1200px-SSL_Secure_Connection.svg.png' },
];

const SecurePaymentBadges: React.FC = () => {
  return (
    <section className="py-8 bg-charcoal-brown">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-celadon-light mb-6">Secure Payment & Trust</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {paymentMethods.map((method) => (
            <div key={method.name} className="flex items-center">
              <Image
                src={method.icon}
                alt={method.name}
                width={60}
                height={40}
                objectFit="contain"
                className="filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurePaymentBadges;
