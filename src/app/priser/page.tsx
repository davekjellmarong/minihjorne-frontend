// src/app/priser.tsx
import React from 'react';

// Mock data for pricing tiers
const pricingTiers = [
  {
    title: 'Basic',
    price: 'Free',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'Pro',
    price: '$9.99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
  {
    title: 'Enterprise',
    price: 'Contact us',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
  },
];

const Priser = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-2xl font-bold mb-4">Our Pricing</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingTiers.map((tier) => (
          <div key={tier.title} className="border p-4 rounded shadow">
            <div className="text-xl font-bold mb-2">{tier.title}</div>
            <div className="text-lg mb-4">{tier.price}</div>
            <ul className="space-y-2">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Priser;