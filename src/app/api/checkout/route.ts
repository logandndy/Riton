import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '../../../lib/stripe';
import type { CartItem } from '../../../lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const { items }: { items: CartItem[] } = await request.json();

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Le panier est vide' },
        { status: 400 }
      );
    }

    const url = await createCheckoutSession(items);
    return NextResponse.json({ url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Impossible de créer la session de paiement' },
      { status: 500 }
    );
  }
}
