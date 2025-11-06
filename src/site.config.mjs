const VERCEL_URL = process.env.VERCEL_URL;
export const SITE_URL =
  process.env.SITE_URL || (VERCEL_URL ? `https://${VERCEL_URL}` : 'https://ayazqureshi.com');

