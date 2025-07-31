import React from "react";
import Card from "./Card";
import MyForm from './MyForm';
import Faq from "./Faq";
import aruna from "./assets/Aruna.png";
import emerald from "./assets/Emerald.png";
import palm from "./assets/Palm.png";
import serenity from "./assets/Serenity.png";
import home_icon from "./assets/home_icon.png";
import tiktok from "./assets/tiktok.png";
import instagram from "./assets/instagram.png";
import yt from "./assets/yt.png";
import twitter from "./assets/twitter.png";



function App() {
   
  return (
   
  <>

 
    <header className="bg-gray-100 p-5  flex justify-between items-center ">
   
      <nav className="[&_a:text-sm flex gap-3">
            <a href="#" className="hover:text-green-600">Home</a>
            <a href="#" className="hover:text-green-600">Properties</a>
            <a href="#" className="hover:text-green-600">Our Projects</a>
            <a href="#" className="hover:text-green-600">FAQs</a>
            <a href="#" className="hover:text-green-600">About Us</a>
      </nav>
     
    
      <div className="flex items-center gap-4">
            <img src={home_icon} alt="House Icon" className="w-5 h-5 object-cover rounded" />

    
            <h1 className="text-xl font-semibold text-gray-800">Aruna</h1>
      </div>
      
      <nav className="[&_a:text-sm flex gap-3">
        <a href="#" className="hover:text-green-600">Contact Us</a>
        <a href="#" className="hover:text-green-600">Book a Call</a>
      </nav>
   </header>

    <section className="bg-black py-4">
        <p className="text-center text-white text-sm">Lock In Your New Home with Flexible Payment Plans and Special Discounts! 
        <a href="#" className="hover:text-green-600">Learn more!</a></p>
    </section>

 
    <section className="bg-white border-b py-2">
   
        <div className="flex gap-8 px-4 py-4 ">
         
            <div className="flex items-center gap-2">
                <label className="mb-1 text-sm text-gray-700">Looking for</label>
                <select className="border rounded px-3 py-2  text-sm">
                    <option>Residence in Yogyakarta</option>
                </select>
           </div>
      
            <div className="flex items-center gap-2">
                 <label className="mb-1 text-sm text-gray-700">Type</label>
                 <select className="border rounded px-3 py-2  text-sm">
                    <option>Residence</option>
                 </select>
           </div>
     
            <div className="flex items-center gap-2 text-sm">
                 <label for="last" className="text-sm  text-gray-700">Price</label>
                 <input type="text" id="Price" className="border rounded px-3 py-2" placeholder="$1,000-$50,000" />
            </div>
      
            <div className="flex items-center gap-2 text-sm">
                <label for="location" className="text-sm text-gray-700 "> Location</label>
                 <input type="text" id="location" name="location" placeholder="📍Indonesia" className="border border-gray-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
       
            <div className="flex items-center gap-2 text-sm">
                <div className="relative w-64">
                     <input type="text" id="search" name="search" placeholder="Find Specific Property"className="border border-gray-300 rounded pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
                </div>
            </div>
      
            <div className="flex items-center gap-2">
                <button className="bg-gray-800 text-white px-4 py-2 rounded text-sm">Search</button>
            </div>
        </div>  
    </section>

 
    <section className="w-full py-8 ">           
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 place-items-center">
                <Card image={emerald} title="Breeze Valley Residences" price="$250,000" description="2.4GHz, ergonomic design"/>
                <Card image={serenity} title="Breeze Valley Residences" price="$250,000" description="2.4GHz, ergonomic design" />
                <Card image={palm} title="Breeze Valley Residences" price="$250,000" description="2.4GHz, ergonomic design" />
                <Card image={emerald} title="Breeze Valley Residences" price="$250,000" description="2.4GHz, ergonomic design"/>
                <Card image={serenity} title="Breeze Valley Residences" price="$250,000" description="2.4GHz, ergonomic design"/>
                <Card image={palm} title="Breeze Valley Residences" price="$250,000"description="2.4GHz, ergonomic design" />
      </div>

    </section>

     <div className="flex justify-center items-center space-x-4 mb-6">
        
   
    <button id="prevBtn"
            onclick="prevPage()"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 text-gray-500 text-xl">
      &lt;
    </button>

    
    <div id="pagination" className="flex space-x-4">
 
    </div>

   
    <button id="nextBtn"
            onclick="nextPage()"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 text-gray-500 text-xl">
      &gt;
    </button>

  </div>

 

     <hr className="mx-auto border-gray-200 " /> 
 

  <section className=" w-full py-5 px-10">
   
  <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-lg bg-gray-800">
        <div className="relative w-full lg:w-1/2 ">
            <img id="slider-image" 
                src={serenity} alt="Modern Home" className="w-full h-full object-cover transition-all duration-500" />
    
      
            <button onclick="prevImage()" 
                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black">
                 &lt;
            </button>
            <button onclick="nextImage()" 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black">
             &gt;
            </button>
        </div>

     
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-6 text-white" >Still haven't found what you're looking for?</h2>
             
            <MyForm />
                       
      
        </div>
        </div>
        
    
     <div className="p-8 lg:p-16 flex flex-col lg:flex-row lg:space-x-12">

        <div className="lg:w-1/3 mb-8 lg:mb-0 w-full">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Frequently Asked Question</h1>
            <p className="text-gray-600 text-lg">
                Whether you're looking for a modern apartment in the city or a peaceful home in the suburbs, our listings offer something for everyone.
            </p>
        </div>
        
        <div className=" w-full lg:w-2/3">
            <div className="space-y-6">
                <Faq />                      
            </div>
        </div>
    </div>

 </section>

<footer className="bg-white py-6 px-4 lg:px-8 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-gray-800 text-sm">

            <div className=" mb-4 md:mb-0 text-center md:text-left">
                <p className="text-sm">&copy;2024 Aruna Residence. All right reserved</p>
            </div>

            <nav className="mb-4 md:mb-0">
                <ul className="flex flex-wrap justify-center md:space-x-8 space-x-4">
                    <li><a href="#" className="hover:text-gray-600 transition duration-200">Home</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition duration-200">Properties</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition duration-200">Our Projects</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition duration-200">FAQs</a></li>
                    <li><a href="#" className="hover:text-gray-600 transition duration-200">About Us</a></li>
                </ul>
            </nav>
        
            <div className="flex space-x-1">
                
                <a href="#" className="icon">
                    <img src={instagram}  width="16" height="16" fill="currentColor" viewBox="0 0 16 16"/>
                </a>
                <a href="#" className="icon">
                  
                    <img src={twitter}  width="16" height="16" />
                </a>
                
               <a href="#" className="icon">
                    <img src={tiktok}  width="16" height="16" />
                </a>
                <a href="#" className="icon">
                    <img src={yt} width="16" height="16" fill="currentColor"/>
                </a>
              
           
        </div>
    </div>
    
    </footer>

    <section className="bg-white py-10">
    
            <img src={aruna} alt="Example Image" className=" w-full mx-auto  rounded-lg shadow-lg mb-4 h-75"/>
   
    </section>
    </>
  )
  }
export default App;
