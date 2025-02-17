import React from 'react';
import { services } from '../data';
import * as Icons from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in
            the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons];
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Digital Presence?
          </h2>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;