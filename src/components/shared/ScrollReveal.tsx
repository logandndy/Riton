'use client';

import { useEffect } from 'react';

/* ============================================================
   ScrollReveal — Animation engine
   • IntersectionObserver pour les navigateurs sans animation-timeline
   • 3D Tilt sur les cartes
   • Counter animation sur [data-count]
   • Effet magnétique sur .btn-magnetic
   • Ripple sur les boutons au clic
   ============================================================ */

export default function ScrollReveal() {
  useEffect(() => {

    /* ── 1. Counter animation ──────────────────────────── */
    const countObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const target = parseFloat(el.dataset.count ?? '0');
        const suffix = el.dataset.suffix ?? '';
        const prefix = el.dataset.prefix ?? '';
        const isFloat = String(target).includes('.');
        const duration = 1400;
        const start = performance.now();

        const tick = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const value = target * eased;
          el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString('fr')) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

    /* ── 2. 3D Tilt ────────────────────────────────────── */
    function applyTilt(el: HTMLElement, intensity = 8) {
      el.classList.add('tilt-card');

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        el.style.setProperty('--tilt-x', `${-y * intensity}deg`);
        el.style.setProperty('--tilt-y', `${x * intensity}deg`);
        el.style.setProperty('--hover-lift', '-6px');
      };

      const onLeave = () => {
        el.style.setProperty('--tilt-x', '0deg');
        el.style.setProperty('--tilt-y', '0deg');
        el.style.setProperty('--hover-lift', '0px');
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    }

    document.querySelectorAll<HTMLElement>('.category-card').forEach(el => applyTilt(el, 6));

    /* ── 3. Magnetic buttons ───────────────────────────── */
    document.querySelectorAll<HTMLElement>('.btn-magnetic').forEach(el => {
      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
        el.style.setProperty('--mag-x', `${x}px`);
        el.style.setProperty('--mag-y', `${y}px`);
      };
      const onLeave = () => {
        el.style.setProperty('--mag-x', '0px');
        el.style.setProperty('--mag-y', '0px');
      };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
    });

    /* ── 4. Ripple on click ────────────────────────────── */
    const RIPPLE_TARGETS = 'button, .button-primary, .button-secondary, .hero-base-cta, .cart-checkout-btn, .product-add-to-cart-btn';

    const onRippleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(RIPPLE_TARGETS) as HTMLElement | null;
      if (!target) return;

      // Skip if animation disabled
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      target.classList.add('ripple-container');

      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
      target.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    };

    document.addEventListener('click', onRippleClick);

    /* ── 5. Fallback IntersectionObserver ──────────────── */
    // Only needed for browsers without animation-timeline: view()
    const supportsScrollTimeline = CSS.supports('animation-timeline', 'view()');
    if (!supportsScrollTimeline) {
      const SELECTORS = [
        '.value-card',
        '.testimonial-card',
        '.category-card',
        '.reassurance-item',
        '.story-content',
        '.story-image',
        '.featured-products-header',
        '.newsletter-content',
      ].join(', ');

      const fallbackObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'none';
          fallbackObserver.unobserve(el);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      // Set stagger delays + hide elements below fold
      const staggerGroups: Record<string, string> = {
        '.values-grid': '.value-card',
        '.testimonials-grid': '.testimonial-card',
        '.category-nav-grid': '.category-card',
        '.reassurance-container': '.reassurance-item',
      };

      Object.entries(staggerGroups).forEach(([parent, child]) => {
        document.querySelectorAll<HTMLElement>(`${parent} ${child}`).forEach((el, i) => {
          const rect = el.getBoundingClientRect();
          if (rect.top > window.innerHeight * 0.95) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = `opacity .8s var(--ease-out-expo) ${i * 80}ms, transform .8s var(--ease-out-expo) ${i * 80}ms`;
          }
          fallbackObserver.observe(el);
        });
      });

      document.querySelectorAll<HTMLElement>('.story-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-40px)';
        el.style.transition = 'opacity .9s var(--ease-out-expo), transform .9s var(--ease-out-expo)';
        fallbackObserver.observe(el);
      });

      document.querySelectorAll<HTMLElement>('.story-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(40px)';
        el.style.transition = 'opacity .9s var(--ease-out-expo) .1s, transform .9s var(--ease-out-expo) .1s';
        fallbackObserver.observe(el);
      });

      return () => {
        fallbackObserver.disconnect();
        countObserver.disconnect();
        document.removeEventListener('click', onRippleClick);
      };
    }

    return () => {
      countObserver.disconnect();
      document.removeEventListener('click', onRippleClick);
    };
  }, []);

  return null;
}
