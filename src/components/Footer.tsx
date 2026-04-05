import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Riton</h3>
          <p>Charcuterie et Fromages Artisanaux</p>
          <p>Depuis des générations, la qualité premium du terroir ariégeois.</p>
        </div>
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/boutique">Tous nos produits</Link></li>
            <li><Link href="/ou-nous-trouver">Où nous trouver</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Légal</h4>
          <ul>
            <li><Link href="/cgv">CGV</Link></li>
            <li><Link href="/politique-confidentialite">Politique de confidentialité</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@riton.fr</p>
          <p>Téléphone: 05 61 XX XX XX</p>
          <p>Adresse: Halle aux Grains, Foix</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Riton. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;