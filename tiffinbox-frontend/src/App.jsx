import React from "react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TiffinBox 🍱</h1>
          <nav>
            <ul className="flex gap-4">
              <li><a href="#menu" className="hover:underline">Menu</a></li>
              <li><a href="#plans" className="hover:underline">Plans</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-gradient-to-br from-green-200 to-green-50">
        <h2 className="text-4xl font-bold mb-4">Fresh. Homemade. Delivered.</h2>
        <p className="text-lg mb-6">Subscribe to healthy daily meals with TiffinBox</p>
        <Button className="bg-green-600 hover:bg-green-700">Subscribe Now</Button>
      </section>

      <section id="menu" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Today's Menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Veg Thali</h4>
              <p>2 Rotis, Rice, Dal, Sabzi, Curd</p>
            </div>
            <div className="p-4 border rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">South Indian Meal</h4>
              <p>Rice, Sambar, Rasam, Veg Curry, Pickle</p>
            </div>
            <div className="p-4 border rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">North Indian Meal</h4>
              <p>Chapati, Paneer Butter Masala, Dal Makhani, Rice</p>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Meal Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl shadow bg-white">
              <h4 className="text-xl font-semibold mb-2">Weekly</h4>
              <p className="mb-4">₹499 for 7 meals</p>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Choose</Button>
            </div>
            <div className="p-6 border rounded-xl shadow bg-white">
              <h4 className="text-xl font-semibold mb-2">Monthly</h4>
              <p className="mb-4">₹1999 for 30 meals</p>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Choose</Button>
            </div>
            <div className="p-6 border rounded-xl shadow bg-white">
              <h4 className="text-xl font-semibold mb-2">Trial</h4>
              <p className="mb-4">₹99 for 1 meal</p>
              <Button className="bg-green-600 hover:bg-green-700 w-full">Choose</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p>Email us at <a href="mailto:support@tiffinbox.in" className="text-green-700 underline">support@tiffinbox.in</a></p>
        </div>
      </section>

      <footer className="bg-green-600 text-white py-4 text-center">
        <p>© 2025 TiffinBox India. All rights reserved.</p>
      </footer>
    </div>
  );
}
