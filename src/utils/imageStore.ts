import { useEffect, useState } from 'react';
import { DEFAULT_MEDIA_CONFIG } from '../data/defaultData';
import { OwnerMediaConfig } from '../types';

const STORAGE_KEY = 'mts_gym_media_config_v1';

export function getStoredMediaConfig(): OwnerMediaConfig {
  if (typeof window === 'undefined') {
    return DEFAULT_MEDIA_CONFIG;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_MEDIA_CONFIG;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_MEDIA_CONFIG,
      ...parsed,
      galleryImages: parsed.galleryImages?.length ? parsed.galleryImages : DEFAULT_MEDIA_CONFIG.galleryImages,
      communityImages: parsed.communityImages?.length ? parsed.communityImages : DEFAULT_MEDIA_CONFIG.communityImages,
      instagramImages: parsed.instagramImages?.length ? parsed.instagramImages : DEFAULT_MEDIA_CONFIG.instagramImages,
    };
  } catch (e) {
    console.error('Failed to parse stored media config', e);
    return DEFAULT_MEDIA_CONFIG;
  }
}

export function saveMediaConfig(config: OwnerMediaConfig): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    window.dispatchEvent(new Event('mts_media_updated'));
  } catch (e) {
    console.error('Failed to save media config', e);
  }
}

export function resetMediaConfig(): OwnerMediaConfig {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('mts_media_updated'));
  }
  return DEFAULT_MEDIA_CONFIG;
}

export function useMediaConfig() {
  const [config, setConfig] = useState<OwnerMediaConfig>(() => getStoredMediaConfig());

  useEffect(() => {
    const handleUpdate = () => {
      setConfig(getStoredMediaConfig());
    };
    window.addEventListener('mts_media_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('mts_media_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const updateField = (key: keyof OwnerMediaConfig, value: any) => {
    const next = { ...config, [key]: value };
    saveMediaConfig(next);
    setConfig(next);
  };

  const updateGalleryImage = (id: string, newUrl: string, newTitle?: string) => {
    const updatedGallery = config.galleryImages.map(item => 
      item.id === id ? { ...item, url: newUrl, title: newTitle || item.title } : item
    );
    updateField('galleryImages', updatedGallery);
  };

  const addGalleryImage = (item: { id: string; url: string; title: string; category: string }) => {
    updateField('galleryImages', [item, ...config.galleryImages]);
  };

  const removeGalleryImage = (id: string) => {
    updateField('galleryImages', config.galleryImages.filter(item => item.id !== id));
  };

  const updateInstagramImage = (id: string, newUrl: string, newCaption?: string) => {
    const updated = config.instagramImages.map(item =>
      item.id === id ? { ...item, url: newUrl, caption: newCaption || item.caption } : item
    );
    updateField('instagramImages', updated);
  };

  return {
    config,
    updateField,
    updateGalleryImage,
    addGalleryImage,
    removeGalleryImage,
    updateInstagramImage,
    resetToDefaults: () => {
      const reset = resetMediaConfig();
      setConfig(reset);
    }
  };
}
