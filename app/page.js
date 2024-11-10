import Image from "next/image";
 import Navbar from "@/components/navbar";

export default function Home() {
  return (
<main>
<Navbar/>
 <div className="min-h-screen bg-gray-100">
 <section class="bg-gray-100 dark:bg-gray-900 py-16">
  <div class="container mx-auto">
    <h2 class="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12">Our Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
    
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Consulting</h3>
        <p class="mt-4 text-gray-600 dark:text-gray-300">Expert guidance to streamline your business strategy and optimize operational efficiency.</p>
      </div>
          <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Custom Solutions</h3>
        <p class="mt-4 text-gray-600 dark:text-gray-300">Tailored software solutions to meet the unique needs of your organization, driving innovation.</p>
      </div>
  
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Support & Maintenance</h3>
        <p class="mt-4 text-gray-600 dark:text-gray-300">Reliable technical support and maintenance services to ensure seamless operations.</p>
      </div>
    </div>
  </div>
</section>

<section class="bg-white dark:bg-gray-800 py-16">
  <div class="container mx-auto">
    <h2 class="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12">Client Testimonials</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  
      <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
        <p class="text-gray-600 dark:text-gray-300">"Their expertise and professionalism were beyond our expectations. They delivered outstanding results."</p>
        <h4 class="mt-4 font-semibold text-gray-900 dark:text-white">- Alex Johnson, CEO of TechCorp</h4>
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
        <p class="text-gray-600 dark:text-gray-300">"From concept to execution, the team was highly collaborative and results-driven."</p>
        <h4 class="mt-4 font-semibold text-gray-900 dark:text-white">- Maria Lopez, Marketing Director, Innovate Inc.</h4>
      </div>
    
      <div class="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg transition hover:shadow-xl">
        <p class="text-gray-600 dark:text-gray-300">"Reliable, professional, and dedicated to excellence. I highly recommend their services."</p>
        <h4 class="mt-4 font-semibold text-gray-900 dark:text-white">- James Parker, Founder of StartUpX</h4>
      </div>
    </div>
  </div>
</section>


  
<footer class="bg-gray-900 text-white py-3">
  <div class="container mx-auto text-center flex justify-between items-center">
    <div class="flex items-center">
      <a href="#" class="text-blue-400 hover:text-blue-600 mx-2">Privacy Policy</a>
      <a href="#" class="text-blue-400 hover:text-blue-600 mx-2">Terms of Service</a>
    </div>
    <p>&copy; 2024 technolocal. All rights reserved.</p>
  </div>
</footer>

    </div>
 
</main>
  );
}