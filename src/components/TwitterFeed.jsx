'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const TwitterFeed = () => {
    // Fake data for UI
    const [tweets] = useState([
        {
            id: '1',
            text: '🚀 Exciting developments in India\'s industrial corridor infrastructure! #NICDC #India #IndustrialCorridor #Infrastructure #development #newindia #indiareimagined #digitandia #smartcities #smartcitiesindia #commerce #manufacturing #nicdc #IndiaReimagined #ministry #goi #plugandplay #industries #AmritKaal #ViksitBharat',
            created_at: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
            public_metrics: {
                like_count: 24,
                retweet_count: 8,
                reply_count: 5,
                quote_count: 3
            }
        },
        {
            id: '2',
            text: 'Replying to @nicdc01\n#governmentofindia #PMGatiShakti #AtmanirbharBharat #greenfieldsmartkities #development',
            created_at: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
            public_metrics: {
                like_count: 18,
                retweet_count: 6,
                reply_count: 3,
                quote_count: 2
            }
        },
        {
            id: '3',
            text: '📊 Latest infrastructure development statistics show remarkable progress in industrial corridors across India. Major milestones achieved in Q3 2025! #Infrastructure #Development #NICDC #Progress #Statistics #IndiaGrowth',
            created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            public_metrics: {
                like_count: 42,
                retweet_count: 15,
                reply_count: 12,
                quote_count: 7
            }
        },
        {
            id: '4',
            text: '🏭 Industrial corridor projects are transforming India\'s manufacturing landscape. New investment opportunities emerging across multiple sectors. Join the growth story! #Manufacturing #Investment #IndustrialGrowth #MadeInIndia',
            created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            public_metrics: {
                like_count: 67,
                retweet_count: 23,
                reply_count: 18,
                quote_count: 9
            }
        }
    ]);
    const [loading] = useState(false);
    const [error] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

        if (diffInHours < 1) return 'now';
        if (diffInHours < 24) return `${diffInHours}h`;
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays}d`;
    };



    return (
        <div className="space-y-4">
            {tweets.map((tweet) => (
                <div key={tweet.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-semibold text-xs">NICP</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                                <span className="font-semibold text-gray-900 truncate">NICDC</span>
                                <span className="text-blue-500 flex-shrink-0">✓</span>
                                <span className="text-gray-600 text-sm flex-shrink-0">
                                    @nicdc01 · {formatDate(tweet.created_at)}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <p className="text-gray-800 whitespace-pre-wrap break-words">
                            {tweet.text}
                        </p>
                    </div>

                    {tweet.public_metrics && (
                        <div className="flex items-center justify-between text-gray-500 text-sm pt-2 border-t border-gray-100">
                            <div className="flex items-center space-x-6">
                                <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer">
                                    <MessageCircle className="h-4 w-4" />
                                    <span>{tweet.public_metrics.reply_count || 0}</span>
                                </div>
                                <div className="flex items-center space-x-1 hover:text-green-500 cursor-pointer">
                                    <Repeat2 className="h-4 w-4" />
                                    <span>{tweet.public_metrics.retweet_count || 0}</span>
                                </div>
                                <div className="flex items-center space-x-1 hover:text-red-500 cursor-pointer">
                                    <Heart className="h-4 w-4" />
                                    <span>{tweet.public_metrics.like_count || 0}</span>
                                </div>
                                <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer">
                                    <Share className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            <div className="text-center pt-4">
                <a
                    href="https://x.com/nicdc01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-black hover:bg-black/80 text-white rounded-lg transition-colors"
                >
                    <FaXTwitter className="h-4 w-4 mr-2" />
                    View More on Twitter
                </a>
            </div>
        </div>
    );
};

export default TwitterFeed;