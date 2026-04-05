import { redirect } from 'next/navigation';

// Legacy route — redirect to the canonical URL
export default function CharcuterieLegacy() {
  redirect('/boutique/charcuterie');
}
