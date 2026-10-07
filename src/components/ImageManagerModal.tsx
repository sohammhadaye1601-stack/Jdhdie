import React, { useState } from 'react';
import { X, Upload, RotateCcw, Check, Image as ImageIcon, Camera, Link, Plus, Trash2 } from 'lucide-react';
import { useMediaConfig } from '../utils/imageStore';
import { FallbackImage } from './FallbackImage';

interface ImageManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageManagerModal: React.FC<ImageManagerModalProps> = ({ isOpen, onClose }) => {
  const {
    config,
    updateField,
    updateGalleryImage,
    addGalleryImage,
    removeGalleryImage,
    updateInstagramImage,
    resetToDefaults
  } = useMediaConfig();

  const [activeTab, setActiveTab] = useState<'hero' | 'gallery' | 'community' | 'instagram'>('hero');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // New gallery item state
  const [newGalleryTitle, setNewGalleryTitle] = useState('');
  const [newGalleryCategory, setNewGalleryCategory] = useState<'strength' | 'equipment' | 'community' | 'lifestyle'>('strength');
  const [newGalleryUrl, setNewGalleryUrl] = useState('');

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, onComplete: (dataUrl: string) => void) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (max 5MB for storage stability)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB. Please choose a smaller photo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        onComplete(result);
        showNotification('Photo uploaded from device successfully!');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddNewGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalleryUrl) return;
    addGalleryImage({
      id: `gal-custom-${Date.now()}`,
      title: newGalleryTitle || 'MTS Workout Session',
      category: newGalleryCategory,
      url: newGalleryUrl
    });
    setNewGalleryUrl('');
    setNewGalleryTitle('');
    showNotification('New gallery photo added!');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-heading font-bold text-white uppercase">
                MTS GYM Owner Media Hub
              </h3>
              <p className="text-xs text-zinc-400">
                Replace placeholder images with real photos of MTS GYM, members, and equipment.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (confirm('Reset all photos to default curated gym images?')) {
                  resetToDefaults();
                  showNotification('Reset to defaults');
                }
              }}
              className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg flex items-center gap-1.5 transition-colors border border-zinc-800"
              title="Reset all images to default"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-zinc-800 bg-zinc-950 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('hero')}
            className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === 'hero'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Hero & Key Banners
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === 'gallery'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Visual Gallery ({config.galleryImages.length})
          </button>
          <button
            onClick={() => setActiveTab('community')}
            className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === 'community'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Community & Events ({config.communityImages.length})
          </button>
          <button
            onClick={() => setActiveTab('instagram')}
            className={`pb-3 px-3 text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === 'instagram'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            Instagram Section ({config.instagramImages.length})
          </button>
        </div>

        {/* Notification Toast */}
        {successToast && (
          <div className="bg-emerald-500 text-black text-xs font-bold py-2 px-6 text-center animate-in fade-in">
            ✓ {successToast}
          </div>
        )}

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-8">
          
          {/* TAB 1: HERO & BANNERS */}
          {activeTab === 'hero' && (
            <div className="space-y-6">
              
              {/* Hero Image Slot */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Hero Background Photo</h4>
                    <p className="text-xs text-zinc-400">The primary high-impact image shown on website load.</p>
                  </div>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg uppercase tracking-wider">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload From Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, (url) => updateField('heroImage', url))}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 h-36 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950">
                    <FallbackImage src={config.heroImage} alt="Hero preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <label className="text-xs text-zinc-400 block font-medium">Or Paste Direct Photo URL:</label>
                    <input
                      type="url"
                      value={config.heroImage}
                      onChange={(e) => updateField('heroImage', e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Intro Image */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Brand Intro Photo ("Eat. Sleep. Lift. Repeat.")</h4>
                    <p className="text-xs text-zinc-400">Featured portrait/action shot alongside founders & philosophy.</p>
                  </div>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg uppercase tracking-wider">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload From Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, (url) => updateField('brandIntroImage', url))}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 h-36 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950">
                    <FallbackImage src={config.brandIntroImage} alt="Intro preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <label className="text-xs text-zinc-400 block font-medium">Or Paste Direct Photo URL:</label>
                    <input
                      type="url"
                      value={config.brandIntroImage}
                      onChange={(e) => updateField('brandIntroImage', e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Motivation Section Image */}
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Motivation Banner Photo ("Discipline Over Everything")</h4>
                    <p className="text-xs text-zinc-400">Background photo behind the full-width motivational creed.</p>
                  </div>
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg uppercase tracking-wider">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload From Device</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, (url) => updateField('motivationImage', url))}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 h-36 rounded-xl overflow-hidden border border-zinc-700 bg-zinc-950">
                    <FallbackImage src={config.motivationImage} alt="Motivation preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <label className="text-xs text-zinc-400 block font-medium">Or Paste Direct Photo URL:</label>
                    <input
                      type="url"
                      value={config.motivationImage}
                      onChange={(e) => updateField('motivationImage', e.target.value)}
                      placeholder="https://..."
                      className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-zinc-200 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: GALLERY PHOTOS */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              
              {/* Quick Add Form */}
              <form onSubmit={handleAddNewGallery} className="p-4 rounded-2xl bg-zinc-900/90 border border-amber-500/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Plus className="w-4 h-4" />
                  <span>Add New Photo To Gallery</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Photo Title (e.g. Squat Rack)"
                    value={newGalleryTitle}
                    onChange={(e) => setNewGalleryTitle(e.target.value)}
                    className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white"
                  />
                  <select
                    value={newGalleryCategory}
                    onChange={(e) => setNewGalleryCategory(e.target.value as any)}
                    className="px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white"
                  >
                    <option value="strength">Strength & Lifting</option>
                    <option value="equipment">Equipment & Racks</option>
                    <option value="community">Community & Events</option>
                    <option value="lifestyle">Fitness Lifestyle</option>
                  </select>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="Image URL"
                      value={newGalleryUrl}
                      onChange={(e) => setNewGalleryUrl(e.target.value)}
                      className="flex-1 px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white"
                    />
                    <label className="cursor-pointer px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-xs flex items-center justify-center">
                      <Upload className="w-3.5 h-3.5" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, (url) => setNewGalleryUrl(url))}
                      />
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!newGalleryUrl}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black text-xs font-bold rounded-lg uppercase tracking-wider cursor-pointer"
                >
                  Insert Photo
                </button>
              </form>

              {/* Gallery List */}
              <div className="space-y-4">
                {config.galleryImages.map((img) => (
                  <div key={img.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-zinc-950 border border-zinc-800">
                      <FallbackImage src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 w-full space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-amber-500 uppercase">{img.category}</span>
                        <button
                          onClick={() => removeGalleryImage(img.id)}
                          className="text-zinc-500 hover:text-red-400 p-1"
                          title="Remove image"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={img.title}
                        onChange={(e) => updateGalleryImage(img.id, img.url, e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs text-white"
                        placeholder="Caption / Title"
                      />
                      <div className="flex items-center gap-2">
                        <input
                          type="url"
                          value={img.url}
                          onChange={(e) => updateGalleryImage(img.id, e.target.value, img.title)}
                          className="flex-1 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs text-zinc-300"
                          placeholder="Image URL"
                        />
                        <label className="cursor-pointer px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 rounded flex items-center gap-1">
                          <Upload className="w-3 h-3" />
                          <span>Upload</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleFileUpload(e, (url) => updateGalleryImage(img.id, url))}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 3: COMMUNITY PHOTOS */}
          {activeTab === 'community' && (
            <div className="space-y-4">
              {config.communityImages.map((img) => (
                <div key={img.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-zinc-950 border border-zinc-800">
                    <FallbackImage src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="text"
                      value={img.title}
                      onChange={(e) => {
                        const updated = config.communityImages.map(c => c.id === img.id ? { ...c, title: e.target.value } : c);
                        updateField('communityImages', updated);
                      }}
                      className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs text-white"
                      placeholder="Event Description"
                    />
                    <div className="flex items-center gap-2">
                      <input
                        type="url"
                        value={img.url}
                        onChange={(e) => {
                          const updated = config.communityImages.map(c => c.id === img.id ? { ...c, url: e.target.value } : c);
                          updateField('communityImages', updated);
                        }}
                        className="flex-1 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs text-zinc-300"
                        placeholder="Image URL"
                      />
                      <label className="cursor-pointer px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 rounded flex items-center gap-1">
                        <Upload className="w-3 h-3" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, (url) => {
                            const updated = config.communityImages.map(c => c.id === img.id ? { ...c, url } : c);
                            updateField('communityImages', updated);
                          })}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: INSTAGRAM PHOTOS */}
          {activeTab === 'instagram' && (
            <div className="space-y-4">
              <p className="text-xs text-zinc-400 mb-2">
                Update the 6 Instagram preview tiles displayed in the "Follow the Journey" section:
              </p>
              {config.instagramImages.map((post) => (
                <div key={post.id} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-zinc-950 border border-zinc-800">
                    <FallbackImage src={post.url} alt="Post preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="text"
                      value={post.caption}
                      onChange={(e) => updateInstagramImage(post.id, post.url, e.target.value)}
                      className="w-full px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs text-white"
                      placeholder="Instagram Caption"
                    />
                    <div className="flex items-center gap-2">
                      <input
                        type="url"
                        value={post.url}
                        onChange={(e) => updateInstagramImage(post.id, e.target.value, post.caption)}
                        className="flex-1 px-2.5 py-1.5 bg-zinc-950 border border-zinc-800 rounded text-xs text-zinc-300"
                        placeholder="Image URL"
                      />
                      <label className="cursor-pointer px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-200 rounded flex items-center gap-1">
                        <Upload className="w-3 h-3" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleFileUpload(e, (url) => updateInstagramImage(post.id, url))}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-zinc-400">
            All edits save automatically to browser storage.
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 font-bold uppercase tracking-wider text-black rounded-xl transition-all cursor-pointer"
          >
            Done & Return to Site
          </button>
        </div>

      </div>
    </div>
  );
};
