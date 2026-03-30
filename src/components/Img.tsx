'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImgProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function Img({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
}: ImgProps) {
  const [error, setError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-neutral-800 ${className}`}
      style={{ aspectRatio }}
    >
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm px-4 text-center">
          {alt}
        </div>
      )}
    </div>
  );
}
