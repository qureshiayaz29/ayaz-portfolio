// Mood Reactions: one place for everything the product + policy pages show.
export const MR = {
  name: 'Mood Reactions',
  tagline: 'Your browser, now with feelings.',
  // Fill these in at launch. While empty, the page shows "coming soon" instead of the buttons.
  chromeStoreUrl: '', // Chrome Web Store listing URL, after approval
  checkoutUrl: '', // Dodo Payments LIVE checkout link, after Dodo approval
  priceIndia: '₹299',
  priceIntl: '$9.99',
  supportEmail: 'info@insideandroid.in',
  seller: 'Ayaz Qureshi',
  sellerCountry: 'India',
  activations: 3,
  refundDays: 7,
  lastUpdated: '24 October 2026',
};

export const MOODS = [
  { emoji: '💸', name: 'Payment done', when: 'Order placed, payment successful, thank-you pages', caption: 'Paisa gaya. Worth it though.', accent: '#22c55e' },
  { emoji: '😭', name: 'Payment failed', when: 'Card declined, insufficient balance, transaction failed', caption: 'Card said no.', accent: '#ef4444' },
  { emoji: '😎', name: 'Logged in', when: 'Password logins and Continue with Google, Apple, GitHub and more', caption: "I'm in.", accent: '#3b82f6' },
  { emoji: '🤦', name: 'Login failed', when: 'Wrong password, invalid OTP, too many attempts', caption: 'Wrong password, bro.', accent: '#f97316' },
  { emoji: '🔥', name: 'Something broke', when: '"Something went wrong", server errors', caption: 'This is fine.', accent: '#eab308' },
];
