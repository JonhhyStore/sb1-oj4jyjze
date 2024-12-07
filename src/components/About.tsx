import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-6">
              We believe in the power of minimalist design to transform spaces and lives. 
              Our carefully curated collection brings together the finest pieces from 
              around the world, each selected for its exceptional quality and timeless appeal.
            </p>
            <p className="text-gray-300">
              Since 2015, we've been helping our customers create spaces that inspire 
              and delight, combining form and function in perfect harmony.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&q=80"
              alt="Our workspace"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}