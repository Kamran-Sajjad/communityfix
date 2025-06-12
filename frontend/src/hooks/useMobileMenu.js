import { useState } from "react";

export default function useMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return { mobileMenuOpen, setMobileMenuOpen };
}