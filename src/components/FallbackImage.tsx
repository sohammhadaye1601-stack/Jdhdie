import React, { useState } from 'react';
import { Dumbbell } from 'lucide-react';

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  aspectClass?: string;
}

export const FallbackImage: React.FC<FallbackImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  aspectClass = 'aspect-[16/9]',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full h-full min-h-[140px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/80 text-zinc-400 select-none text-center ${aspectClass} ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-2 text-amber-500">
          <Dumbbell className="w-6 h-6 animate-pulse" />
        </div>
        <p className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
          {fallbackText || alt || 'MTS GYM'}
        </p>
        <span className="text-[10px] text-zinc-500 mt-1">MTS Strength & Performance</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-900 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};
