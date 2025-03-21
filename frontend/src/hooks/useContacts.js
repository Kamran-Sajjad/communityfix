// hooks/useContacts.js
import { useState } from "react";

const useContacts=()=> {
// export default function useContacts() {
  const [showContacts, setShowContacts] = useState(true);

  return { showContacts, setShowContacts };
}
export default useContacts;