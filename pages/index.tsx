import React from 'react';
import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_NAME, APP_DESCRIPTION } from '../constants';

// Sample data for demonstration
const sampleProperties = [
  {
    id: '1',
    title: 'Cozy Downtown Apartment',
    description: 'A beautiful apartment in the heart of the city with modern amenities and stunning views.',
    location: 'New York, NY',
    price: 150,
    rating: 4.8,
    image: '/assets/images/property-1.jpg',
  },
  {
    id: '2',
    title: 'Luxury Beach House',
    description: 'Oceanfront property with private beach access and panoramic sea views.',
    location: 'Miami, FL',
    price: 300,
    rating: 4.9,
    image: '/assets/images/property-2.jpg',
  },
  {
    id: '3',
    title: 'Mountain Cabin Retreat',
    description: 'Peaceful cabin surrounded by nature, perfect for a weekend getaway.',
    location: 'Aspen, CO',
    price: 200,
    rating: 4.7,
    image: '/assets/images/property-3.jpg',
  },
];

const Home: React.FC = () => {
  const handleCardClick = (propertyId: string) => {
    console.log('Card clicked:', propertyId);
    // Future navigation logic will go here
  };

  const handleBookNow = () => {
    console.log('Book now clicked');
    // Future booking logic will go here
  };

  const handleViewAll = () => {
    console.log('View all clicked');
    // Future navigation to listings page will go here
  };

  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{APP_NAME}</h1>
                <p className="text-gray-600">{APP_DESCRIPTION}</p>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="md">
                  Sign In
                </Button>
                <Button variant="primary" size="md">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Find Your Perfect Stay
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover amazing places to stay around the world
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white"
              onClick={handleBookNow}
            >
              Start Exploring
            </Button>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Featured Properties
                </h3>
                <p className="text-gray-600">
                  Handpicked properties just for you
                </p>
              </div>
              <Button
                variant="outline"
                size="md"
                onClick={handleViewAll}
              >
                View All
              </Button>
            </div>

            {/* Property Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleProperties.map((property) => (
                <Card
                  key={property.id}
                  id={property.id}
                  title={property.title}
                  description={property.description}
                  location={property.location}
                  price={property.price}
                  rating={property.rating}
                  image={property.image}
                  onClick={() => handleCardClick(property.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of travelers who trust our platform
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2024 {APP_NAME}. All rights reserved.</p>
              <p className="mt-2">Built with Next.js, TypeScript, and TailwindCSS</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
