'use client';

import { useState, useEffect } from 'react';
import { Linkedin, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import Image from 'next/image';

const LinkedInFeed = () => {
    // Fake data for UI
    const [posts] = useState([
        {
            id: '1',
            text: '🚀 Exciting developments in India\'s industrial corridor infrastructure! NICP continues to drive innovation and growth across multiple sectors. Our latest initiatives are creating world-class manufacturing hubs that will position India as a global manufacturing powerhouse. Join us in building the future of Indian industry.',
            author: {
                name: 'National Industrial Corridor Development Corporation',
                title: 'Government Organization',
                profileImage: '/logo.png',
                verified: true
            },
            createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
            metrics: {
                likes: 156,
                comments: 23,
                shares: 45
            },
            hashtags: ['#NICDC', '#India', '#IndustrialCorridor', '#Infrastructure', '#Manufacturing'],
            image: '/logo.png'
        },
        {
            id: '2',
            text: '📊 Infrastructure development update: Our latest quarterly report shows significant progress in industrial corridor projects across India. Key achievements include improved logistics networks, enhanced digital infrastructure, and sustainable development practices. The future of Indian manufacturing is bright! 🌟',
            author: {
                name: 'National Industrial Corridor Development Corporation',
                title: 'Government Organization',
                profileImage: '/logo.png',
                verified: true
            },
            createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
            metrics: {
                likes: 243,
                comments: 34,
                shares: 67
            },
            hashtags: ['#Infrastructure', '#Development', '#India', '#Progress', '#Quarterly'],
            image: null
        },
        {
            id: '3',
            text: '🌟 Partnering with leading organizations to accelerate India\'s industrial transformation. Together, we\'re creating world-class infrastructure that supports sustainable growth and innovation. New partnerships announced with major global players in manufacturing and technology sectors.',
            author: {
                name: 'National Industrial Corridor Development Corporation',
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
            hashtags: ['#Partnership', '#Innovation', '#Growth', '#NICDC', '#GlobalCollaboration'],
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
                    href="https://linkedin.com/company/investnicp"
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