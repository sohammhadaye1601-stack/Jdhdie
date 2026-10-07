import React, { useState } from 'react';
import { Maximize2, Plus, X, Camera } from 'lucide-react';
import { GalleryItem } from '../types';
import { FallbackImage } from './FallbackImage';

interface GymExperienceProps {
  galleryImages: { id: string; url: string; title: string; category: string }[];
  onOpenOwnerHub: () => void;
}

export const GymExperience: React.FC<GymExperienceProps> = ({
  galleryImages,
  onOpenOwnerHub,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'strength', label: 'Strength & Lifting' },
    { id: 'equipment', label: 'Equipment & Racks' },
    { id: 'community', label: 'Community & Events' },
    { id: 'lifestyle', label: 'Fitness Lifestyle' },
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#09090b] relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Filter Segmented Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-amber-500 uppercase mb-2">
              <span>VISUAL SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight text-balance">
              THE MTS <span className="gold-gradient-text">EXPERIENCE</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              From heavy iron lifts to community celebrations and elite equipment. Real moments forged at MTS GYM.
            </p>
          </div>

          {/* Action buttons: Filter controls & Owner Upload quick trigger */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onOpenOwnerHub}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
              title="Add or update real gym photos"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Update Photos</span>
            </button>
          </div>
        </div>

        {/* Category Filters (interactive button controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20 font-bold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => {
            const isMarquee = idx === 0 || idx === 3;
            return (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/80 cursor-pointer transition-all duration-300 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 ${
                  isMarquee ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-square'
                }`}
              >
                <FallbackImage
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  aspectClass="h-full"
                />

                {/* Dark Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white/80 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                  <span className="text-[11px] font-semibold tracking-widest text-amber-400 uppercase mb-1">
                    {img.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                    {img.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                <FallbackImage
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full max-h-[75vh] object-contain mx-auto"
                  aspectClass="max-h-[75vh]"
                />
                <div className="p-4 sm:p-6 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs text-amber-500 font-semibold tracking-wider uppercase block">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white">
                      {selectedImage.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      onOpenOwnerHub();
                    }}
                    className="text-xs text-zinc-400 hover:text-amber-400 transition-colors self-start sm:self-auto"
                  >
                    Edit / Replace this photo in Owner Hub →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
