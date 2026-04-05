'use client';

import Link from 'next/link';
import { useCartStore } from '../store/useCartStore';

const Navbar = () => {
  const itemCount = useCartStore(state => state.getItemCount());

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          Riton
        </Link>
        <ul className="navbar-menu">
          <li><Link href="/boutique">Tous nos produits</Link></li>
          <li><Link href="/boutique/charcuterie">Charcuterie</Link></li>
          <li><Link href="/boutique/fromages">Fromages</Link></li>
          <li><Link href="/boutique/epicerie">Épicerie</Link></li>
          <li><Link href="/ou-nous-trouver">Où nous trouver</Link></li>
        </ul>
        <div className="navbar-cart">
          <Link href="/panier">
            Panier ({itemCount})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;