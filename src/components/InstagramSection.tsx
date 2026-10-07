import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { GYM_DETAILS } from '../data/defaultData';
import { FallbackImage } from './FallbackImage';

interface InstagramSectionProps {
  instagramImages: { id: string; url: string; caption: string; likes: number }[];
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ instagramImages }) => {
  const [activePost, setActivePost] = useState<{ url: string; caption: string; likes: number } | null>(null);

  return (
    <section className="py-24 bg-[#0c0c0e] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Instagram Profile Lockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-zinc-800/80">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase mb-2">
              <Instagram className="w-3.5 h-3.5" />
              <span>OFFICIAL INSTAGRAM COMMUNITY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight text-balance">
              FOLLOW THE <span className="gold-gradient-text">JOURNEY</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Daily workout clips, transformation PRs, form breakdowns and gym energy from Shivpuri.
            </p>
          </div>

          {/* Instagram Account Stat Badge & Follow CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-4 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black font-bold font-heading">
                MTS
              </div>
              <div>
                <div className="font-bold text-white flex items-center gap-1">
                  <span>{GYM_DETAILS.instagram.handle}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-[11px] text-zinc-400">
                  {GYM_DETAILS.instagram.postsCount} posts · {GYM_DETAILS.instagram.followersCount} followers
                </div>
              </div>
            </div>

            <a
              href={GYM_DETAILS.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 rounded-xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <Instagram className="w-4 h-4" />
              <span>FOLLOW ON INSTAGRAM</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        {/* 6-Grid Instagram Post Previews */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramImages.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group relative aspect-square rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer hover:border-amber-500/50 transition-all shadow-md"
            >
              <FallbackImage
                src={post.url}
                alt="MTS GYM Instagram workout post"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                aspectClass="aspect-square"
              />

              {/* Hover Overlay with Likes & Caption preview */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                    <span>{post.likes}</span>
                  </span>
                  <Instagram className="w-3.5 h-3.5 text-zinc-300" />
                </div>

                <p className="text-[10px] text-zinc-200 line-clamp-3 leading-tight">
                  {post.caption}
                </p>

                <span className="text-[9px] uppercase font-bold tracking-wider text-amber-400 text-center">
                  Click to View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Follow-up text */}
        <div className="text-center mt-6">
          <p className="text-xs text-zinc-500">
            Tag <span className="text-amber-400 font-medium">{GYM_DETAILS.instagram.handle}</span> and #MTSGym in your training stories to get featured.
          </p>
        </div>

        {/* Interactive Post Modal */}
        {activePost && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-md w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xs font-heading">
                    MTS
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">mts.gym</span>
                    <span className="text-[10px] text-zinc-400">Shivpuri, Madhya Pradesh</span>
                  </div>
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="text-zinc-400 hover:text-white text-sm font-bold px-2 py-1"
                >
                  ✕
                </button>
              </div>

              <div className="aspect-square bg-zinc-900">
                <FallbackImage
                  src={activePost.url}
                  alt="Post preview"
                  className="w-full h-full object-cover"
                  aspectClass="aspect-square"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center gap-4 text-xs text-zinc-300">
                  <span className="flex items-center gap-1 font-semibold text-white">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {activePost.likes} likes
                  </span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <MessageCircle className="w-4 h-4" /> 18 comments
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  <strong className="text-white mr-1.5">mts.gym</strong>
                  {activePost.caption}
                </p>

                <a
                  href={GYM_DETAILS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 rounded-lg flex items-center justify-center gap-2 transition-colors block text-center"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Open On Instagram Profile</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
