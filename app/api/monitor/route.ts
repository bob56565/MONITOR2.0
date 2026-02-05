import { NextRequest, NextResponse } from 'next/server'

const MONITOR_WORKER_URL = process.env.MONITOR_WORKER_URL || 'https://your-worker.your-subdomain.workers.dev'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const response = await fetch(`${MONITOR_WORKER_URL}/analyze?mode=a2`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Worker responded with ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Monitor API Error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze biomarkers' },
      { status: 500 }
    )
  }
}