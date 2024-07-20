import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();

  console.log('Feedback received:', data);

  return NextResponse.json(
    { message: 'Feedback received' },
    { status: 200 }
  );
}
