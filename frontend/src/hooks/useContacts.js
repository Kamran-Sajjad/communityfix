// hooks/useContacts.js
import { useState } from "react";

export default function useContacts() {
  const [showContacts, setShowContacts] = useState(true);

  return { showContacts, setShowContacts };
}