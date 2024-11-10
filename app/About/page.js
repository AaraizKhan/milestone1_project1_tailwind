import React from 'react'
import Navbar from '@/components/navbar'

const page = () => {
  return (
    <main>
        <Navbar/>
    <div class="bg-gray-100 dark:bg-gray-900 py-16">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="text-center mb-12">
        <div class="text-5xl font-bold text-gray-900 dark:text-white">About Us</div>
        <div class="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          At Technolocal, we are committed to delivering excellence through innovative solutions and unparalleled customer service. Our focus is on empowering businesses with the tools they need to succeed in a competitive and rapidly changing market.
        </div>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
          <div class="text-3xl font-semibold text-gray-900 dark:text-white">Our Mission</div>
          <div class="mt-4 text-gray-600 dark:text-gray-300">
            Our mission is to help organizations unlock their full potential by providing bespoke solutions that are tailored to their unique challenges. We believe in driving innovation, enhancing productivity, and fostering growth.
          </div>
        </div>
  
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
          <div class="text-3xl font-semibold text-gray-900 dark:text-white">Our Vision</div>
          <div class="mt-4 text-gray-600 dark:text-gray-300">
            We envision a future where businesses of all sizes have the technological resources and strategic insights needed to thrive. Our goal is to be at the forefront of this transformation, providing the guidance and tools to shape tomorrow's business leaders.
          </div>
        </div>
      </div>
  
      <div class="mt-16">
        <div class="text-center">
          <div class="text-3xl font-semibold text-gray-900 dark:text-white">Our Core Values</div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">Integrity</div>
            <div class="mt-4 text-gray-600 dark:text-gray-300">
              We uphold the highest standards of integrity in all our actions and business practices.
            </div>
          </div>
  
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">Innovation</div>
            <div class="mt-4 text-gray-600 dark:text-gray-300">
              We embrace new ideas and innovation, constantly looking for ways to improve our services and solutions.
            </div>
          </div>
  
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">Excellence</div>
            <div class="mt-4 text-gray-600 dark:text-gray-300">
              Excellence is at the heart of everything we do, from delivering results to building long-term relationships.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="bg-gray-900 text-white py-3">
  <div class="container mx-auto text-center flex justify-between items-center">
    <div class="flex items-center">
      <a href="#" class="text-blue-400 hover:text-blue-600 mx-2">Privacy Policy</a>
      <a href="#" class="text-blue-400 hover:text-blue-600 mx-2">Terms of Service</a>
    </div>
    <p>&copy; 2024 technolocal. All rights reserved.</p>
  </div>
</footer>
  </main>
  
  )
}

export default page