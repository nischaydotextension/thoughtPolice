import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join('/')
  const searchParams = request.nextUrl.searchParams
  
  try {
    const redditUrl = `https://www.reddit.com/${path}?${searchParams.toString()}`
    
    const response = await fetch(redditUrl, {
      headers: {
        'User-Agent': 'ThoughtPolice/1.0.0',
      },
    })
    
    if (!response.ok) {
      throw new Error(`Reddit API error: ${response.status}`)
    }
    
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Reddit API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch from Reddit' },
      { status: 500 }
    )
  }
}