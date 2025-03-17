// components/Contacts.jsx
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Contacts() {
  const [showContacts, setShowContacts] = useState(true);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Contacts</h2>
      <div className="space-y-6">
        <ContactItem name="Kamran choudhry" message="bhai kam karo tak" />
        <div className="border-t border-gray-200 pt-4"></div>
        <ContactItem name="Nizam khan" message="Thank you." />
        <div className="border-t border-gray-200 pt-4"></div>
        <ContactItem name="Usman admin" message="Aj kal ban reports arhy." />
        <div className="flex justify-center mt-2">
          <button onClick={() => setShowContacts(!showContacts)}>
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ name, message }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-black rounded-full"></div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-gray-400 text-sm">{message}</p>
      </div>
    </div>
  );
}