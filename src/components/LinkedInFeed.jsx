'use client';

import { useState, useEffect } from 'react';
import { Linkedin, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import Image from 'next/image';

const LinkedInFeed = () => {
    // Fake data for UI
    const [posts] = useState([
        {
            id: '1',
            text: '🚀 Exciting investment opportunities in India\'s diverse sectors! INVEST NICP connects global investors with India\'s thriving industrial corridors and urban centers. Our platform facilitates seamless investment exploration across manufacturing, IT, agriculture, and emerging industries. Join us in unlocking India\'s investment potential.',
            author: {
                name: 'INVEST NICP',
                title: 'Investment Platform',
                profileImage: '/logo.png',
                verified: true
            },
            createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
            metrics: {
                likes: 156,
                comments: 23,
                shares: 45
            },
            hashtags: ['#INVESTNICP', '#India', '#Investment', '#BusinessOpportunities', '#Manufacturing'],
            image: '/logo.png'
        },
        {
            id: '2',
            text: '📊 Investment opportunities update: Our latest market analysis reveals tremendous growth potential across India\'s key investment sectors. Key highlights include expanding IT corridors, thriving agricultural opportunities, and emerging manufacturing hubs. The future of Indian investments is incredibly promising! 🌟',
            author: {
                name: 'INVEST NICP',
                title: 'Investment Platform',
                profileImage: '/logo.png',
                verified: true
            },
            createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
            metrics: {
                likes: 243,
                comments: 34,
                shares: 67
            },
            hashtags: ['#Investment', '#Growth', '#India', '#MarketAnalysis', '#Opportunities'],
            image: null
        },
        {
            id: '3',
            text: '🌟 Connecting global investors with India\'s most promising business opportunities. We facilitate strategic partnerships between international investors and India\'s dynamic sectors. New investment partnerships established with leading global investors in technology and sustainable development.',
            author: {
                name: 'INVEST NICP',
                title: 'Government Organization',
                profileImage: '/logo.png',
                verified: true
            },
            createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
            metrics: {
                likes: 198,
                comments: 28,
                shares: 52
            },
            hashtags: ['#Partnership', '#Investment', '#Growth', '#INVESTNICP', '#GlobalInvestors'],
            image: null
        }
    ]);
    const [loading] = useState(false);
    const [error] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

        if (diffInDays === 0) return 'Today';
        if (diffInDays === 1) return '1 day ago';
        return `${diffInDays} days ago`;
    };

    const formatNumber = (num) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    };

    // Remove loading and error states for fake data

    return (
        <div className="space-y-6">
            {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-semibold text-sm">NICP</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 truncate">{post.author.name}</h4>
                            <p className="text-sm text-gray-600 truncate">{post.author.title}</p>
                            <p className="text-sm text-gray-500">{formatDate(post.createdAt)}</p>
                        </div>
                        <Linkedin className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    </div>

                    <div className="mb-4">
                        <p className="text-gray-800 whitespace-pre-wrap break-words leading-relaxed">
                            {post.text}
                        </p>
                        {post.hashtags && post.hashtags.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1">
                                {post.hashtags.map((hashtag, index) => (
                                    <span key={index} className="text-blue-600 text-sm hover:underline cursor-pointer">
                                        {hashtag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {post.image && (
                        <div className="mb-4">
                            <Image
                                src={post.image}
                                alt="LinkedIn Post Image"
                                width={500}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <div className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
                                <ThumbsUp className="h-4 w-4" />
                                <span>{formatNumber(post.metrics.likes)} likes</span>
                            </div>
                            <div className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
                                <MessageCircle className="h-4 w-4" />
                                <span>{post.metrics.comments} comments</span>
                            </div>
                            <div className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer">
                                <Share2 className="h-4 w-4" />
                                <span>{post.metrics.shares} shares</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="text-center pt-4">
                <a
                    href="https://www.linkedin.com/company/investnicp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                    <Linkedin className="h-4 w-4 mr-2" />
                    View More on LinkedIn
                </a>
            </div>
        </div>
    );
};

export default LinkedInFeed;