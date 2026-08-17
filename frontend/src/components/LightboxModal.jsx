import React from 'react';

export default function LightboxModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-[110] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" 
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={image.url} 
          alt={image.title || "Wedding Photo"} 
          className="max-h-[80vh] w-auto rounded-xl shadow-2xl object-contain border-2 border-rose-400/30"
        />
        {image.title && (
          <p className="mt-3 text-white font-serif text-lg tracking-wide text-center">
            {image.title}
          </p>
        )}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-rose-300 text-2xl p-2 transition"
          aria-label="Close Lightbox"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
