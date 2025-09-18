import { NextResponse } from 'next/server';

// Twitter API v2 endpoint for user tweets
const TWITTER_API_URL = 'https://api.twitter.com/2/users/by/username/nicdc01/tweets';
const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export async function GET() {
    try {
        if (!BEARER_TOKEN) {
            return NextResponse.json(
                { error: 'Twitter Bearer Token not configured' },
                { status: 500 }
            );
        }

        const response = await fetch(
            `${TWITTER_API_URL}?tweet.fields=created_at,public_metrics,author_id&expansions=author_id&user.fields=name,username,profile_image_url,verified&max_results=5`,
            {
                headers: {
                    Authorization: `Bearer ${BEARER_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Twitter API error: ${response.status}`);
        }

        const data = await response.json();

        // Mock data for development if API fails
        const mockData = {
            data: [
                {
                    id: '1',
                    text: '🚀 Exciting developments in India\'s industrial corridor infrastructure! #NICDC #India #IndustrialCorridor #Infrastructure #development #newindia #indiareimagined #digitandia #smartcities #smartcitiesindia #commerce #manufacturing #nicdc #IndiaReimagined #ministry #goi #plugandplay #industries #AmritKaal #ViksitBharat',
                    created_at: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
                    public_metrics: {
                        like_count: 8,
                        retweet_count: 3,
                        reply_count: 2,
                        quote_count: 1
                    },
                    author_id: '12345'
                },
                {
                    id: '2',
                    text: 'Replying to @nicdc01\n#governmentofindia #PMGatiShakti #AtmanirbharBharat #greenfieldsmartkities #development',
                    created_at: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
                    public_metrics: {
                        like_count: 12,
                        retweet_count: 5,
                        reply_count: 4,
                        quote_count: 2
                    },
                    author_id: '12345'
                },
                {
                    id: '3',
                    text: '📊 Latest infrastructure development statistics show remarkable progress in industrial corridors across India. #Infrastructure #Development #NICDC #Progress #Statistics',
                    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
                    public_metrics: {
                        like_count: 15,
                        retweet_count: 8,
                        reply_count: 6,
                        quote_count: 3
                    },
                    author_id: '12345'
                }
            ],
            includes: {
                users: [
                    {
                        id: '12345',
                        name: 'NICDC',
                        username: 'nicdc01',
                        verified: true,
                        profile_image_url: '/logo.png'
                    }
                ]
            }
        };

        return NextResponse.json(data.data ? data : mockData);
    } catch (error) {
        console.error('Twitter API Error:', error);

        // Return mock data on error
        const mockData = {
            data: [
                {
                    id: '1',
                    text: '🚀 Exciting developments in India\'s industrial corridor infrastructure! #NICDC #India #IndustrialCorridor #Infrastructure',
                    created_at: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
                    public_metrics: {
                        like_count: 8,
                        retweet_count: 3,
                        reply_count: 2,
                        quote_count: 1
                    },
                    author_id: '12345'
                }
            ],
            includes: {
                users: [
                    {
                        id: '12345',
                        name: 'NICDC',
                        username: 'nicdc01',
                        verified: true,
                        profile_image_url: '/logo.png'
                    }
                ]
            }
        };

        return NextResponse.json(mockData);
    }
}