import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-5xl font-extrabold text-center text-green-600 mb-12">
          Our Services
        </h1>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          At MobyLife Ltd, we are committed to improving public transportation by making it more accessible, efficient, and user-friendly for Rwandan commuters. Our solutions focus on providing reliability, real-time access, and seamless integration with existing systems, delivering a smooth experience for passengers and providers alike.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Real-Time Route Tracking
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              With our real-time tracking feature, passengers can monitor the exact location of their buses and receive up-to-date arrival times. This helps reduce waiting times and ensures a more convenient and reliable public transportation experience across Rwanda.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Booking, On-Time Booking, and Ticketing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our intuitive booking and e-ticketing system includes on-time booking features with Tap&Go Card integration. Passengers can easily reserve their seats in advance, ensuring a smooth boarding process and reducing overcrowding for a more comfortable journey.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Fleet Management for Operators
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our fleet management system enables public transport companies to monitor vehicles in real time, analyze driver performance, and optimize routes. This ensures efficient operations, supporting transport providers in offering high-quality service to commuters.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Adding Value to Existing Systems
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At MobyLife Ltd, we aim to enhance, rather than replace, existing public transportation systems. By integrating seamlessly with current infrastructures, we add value and help make Rwanda’s transportation system more connected and efficient.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Discover the future of public transportation with MobyLife Ltd – your partner in modern mobility solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
