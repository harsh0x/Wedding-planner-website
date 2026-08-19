import React from 'react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-md bg-[#1A1A1A] text-white px-6 py-4 rounded-2xl shadow-2xl border border-rose-400/40 flex items-center gap-3 animate-fade-in backdrop-blur-md">
      <i className="fa-solid fa-lightbulb text-[#E63956] text-xl"></i>
      <p className="text-sm font-semibold leading-relaxed">{message}</p>
      <button 
        onClick={onClose} 
        className="ml-auto text-gray-400 hover:text-white text-sm p-1 cursor-pointer"
        aria-label="Close notification"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
