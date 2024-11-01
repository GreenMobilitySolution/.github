import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-16">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-5xl font-extrabold text-center text-green-600 mb-12">
          About Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          Welcome to MobyLife Ltd, a pioneering transportation service founded with the vision to transform Rwandan mobility through transforming public transportation in Rwanda. Co-founded by Jean Paul Elisa NIYOKWIZERWA and Akimana Elysee, MobyLife Ltd is committed to providing Rwandans with an efficient, accessible, and eco-friendly platform that redefines the public transit experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Driven by a passion for problem-solving, MobyLife Ltd aims to enhance, rather than replace, the existing public transportation system in Rwanda. We work collaboratively with current infrastructures to add value, making each journey seamless, safe, and timely.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Why We Started
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded out of a desire to address the unique challenges of Rwanda's public transportation system, we recognized the need for a service that meets the specific requirements of Rwandan commuters. Our platform is designed to support public transport companies in delivering optimal services and easing daily commutes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              From real-time route tracking and passenger booking to fleet management, MobyLife Ltd provides solutions for both commuters and transportation providers, enhancing the efficiency and reliability of Rwanda’s urban mobility.
            </p>
          </section>

        {/* Values Section */}
        <section>
        <h2 className="text-3xl font-semibold mt-6 mb-4 text-green-600">Our Values</h2>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          <li><strong>Commitment to Community:</strong> We believe in empowering Rwandan communities by enhancing their access to reliable public transportation.</li>
          <li><strong>Innovation and Adaptability:</strong> As we grow, we continue to adopt technologies and processes that improve efficiency and benefit both passengers and transport operators.</li>
          <li><strong>Collaboration:</strong> We work alongside existing transport systems, enhancing rather than replacing them, to add value to Rwanda’s mobility ecosystem.</li>
          <li><strong>Sustainability:</strong> Eco-friendly practices guide our approach, supporting a greener Rwanda with every journey.</li>
        </ul>
        </section>

          <section>
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Join Us on Our Journey
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Thank you for choosing MobyLife Ltd as your partner in mobility. Together, we are committed to making public transportation in Rwanda a model of innovation and convenience.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Sincerely,
            <br />
            Jean Paul Elisa NIYOKWIZERWA & Akimana Elysee, Co-Founders
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
