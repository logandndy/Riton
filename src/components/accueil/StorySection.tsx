import Image from 'next/image';

// Unsplash: artisan food preparation / marché terroir
const STORY_IMAGE = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80';

export default function StorySection() {
  return (
    <section className="story-section">
      <div className="story-grid">

        {/* ── Content ── */}
        <div className="story-content">
          <h2>L&apos;Histoire de Riton</h2>
          <p>
            Tout a commencé il y a plus de 30 ans, dans les Pyrénées ariégeoises.
            Riton — de son vrai prénom Laurent — a appris le métier auprès de son
            père, charcutier de son état, avant de reprendre le flambeau avec
            la même exigence et la même passion pour le bien fait.
          </p>
          <p>
            Aujourd&apos;hui, vous le retrouvez chaque semaine à la Halle aux Grains
            de Foix. Autour de son étal, fidèles et curieux se retrouvent pour
            redécouvrir des saveurs vraies : un saucisson sec affiné en montagne,
            un fromage de brebis coulant à point, une terrine maison qui sent bon
            le dimanche matin.
          </p>
          <p>
            Avec sa boutique en ligne, Riton veut simplement vous offrir la même
            chose, depuis votre canapé : du vrai, du bon, du fait avec les mains.
          </p>

          <div className="story-stats">
            <div className="stat">
              <span className="stat-number" data-count="30" data-suffix="+">30+</span>
              <span className="stat-label">Années de métier</span>
            </div>
            <div className="stat">
              <span className="stat-number" data-count="100" data-suffix="%">100%</span>
              <span className="stat-label">Fait main</span>
            </div>
            <div className="stat">
              <span className="stat-number">Foix</span>
              <span className="stat-label">Halle aux Grains</span>
            </div>
          </div>
        </div>

        {/* ── Image ── */}
        <div className="story-image">
          <div className="story-image-main">
            <Image
              src={STORY_IMAGE}
              alt="Riton, artisan charcutier et fromager ariégeois"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
