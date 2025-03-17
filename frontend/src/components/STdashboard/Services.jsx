// components/Services.jsx
import { Car, Zap, ChevronRight } from "lucide-react";

export default function Services() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Services</h2>
      <div className="space-y-4">
        <ServiceItem icon={<Car className="w-6 h-6" />} text="Vehicle repair" />
        <ServiceItem icon={<Zap className="w-6 h-6" />} text="Electric installations" />
        <button className="w-full bg-black text-white py-3 rounded-lg mt-6">Add Services</button>
      </div>
    </div>
  );
}

function ServiceItem({ icon, text }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
        <span className="font-medium">{text}</span>
      </div>
      <ChevronRight className="w-5 h-5" />
    </div>
  );
}