import { json } from '@sveltejs/kit';

export function GET() {
  return json({
    message: 'This is a GET request',
    ts: Date.now(),
  });
}
