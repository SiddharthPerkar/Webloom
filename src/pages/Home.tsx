import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="company-heading text-3xl md:text-4xl mb-8 max-w-3xl mx-auto">
              The Webloom is a leading company in digital transformation and innovation
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-gray-300 mb-6">
                The Webloom is a leading digital agency that specializes in
                creating exceptional digital experiences. We combine creativity,
                technology, and strategy to help businesses succeed in the digital
                landscape.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of experts is passionate about delivering innovative
                solutions that drive results and create lasting impact for our
                clients.
              </p>
              <Link
                to="/team"
                className="text-blue-400 font-semibold hover:text-blue-300 inline-flex items-center"
              >
                Meet Our Team
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose The Webloom?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expertise',
                description:
                  'Our team brings years of experience and deep expertise in digital solutions.',
              },
              {
                title: 'Innovation',
                description:
                  'We stay ahead of the curve with cutting-edge technologies and approaches.',
              },
              {
                title: 'Results',
                description:
                  'We focus on delivering measurable results that drive business growth.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;