import React from 'react'
import Navbar from '@/components/navbar'
const page = () => {
  return (
    <main>
        <Navbar/>
    <div class="bg-gray-50 dark:bg-gray-900 py-16">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="text-center mb-12">
      <div class="text-5xl font-bold text-gray-900 dark:text-white">Contact Us</div>
      <div class="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        We are here to help. Feel free to reach out to us for any inquiries, and we’ll get back to you promptly.
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
      
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
        <div class="text-3xl font-semibold text-gray-900 dark:text-white">Contact Information</div>
        <div class="mt-6 text-gray-600 dark:text-gray-300 space-y-4">
          <div><strong>Email:</strong> contact@technolocal.com</div>
          <div><strong>Phone:</strong> +1 234 567 8901</div>
          <div><strong>Address:</strong> 123 Business St., Suite 100, City, Country</div>
        </div>
      </div>


      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
        <div class="text-3xl font-semibold text-gray-900 dark:text-white">Other Ways to Reach Us</div>
        <div class="mt-6 text-gray-600 dark:text-gray-300">
          You can also reach us through our social media platforms or leave us a message via email, and we will respond as soon as possible. We value your communication and look forward to assisting you.
        </div>
        <div class="mt-4 text-gray-600 dark:text-gray-300">
          <strong>Social Media:</strong> @technolocal
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