"use client";

import { Button } from "@/components/ui/button";

interface PreScreenProps {
  onEnter: () => void;
}

export default function PreScreen({ onEnter }: PreScreenProps) {
  // Extract video ID from YouTube URL
  const videoId = "GdM76zuowkg";
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* YouTube iframe background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
          className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
      </div>
      
      {/* Overlay for better button visibility */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Enter button */}
      <Button
        onClick={onEnter}
        className="relative z-10 px-12 py-6 text-2xl bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
        size="lg"
        style={{ 
          fontFamily: '"flood-std", sans-serif',
          fontWeight: 400,
          fontStyle: 'normal'
        }}
      >
        ENTER
      </Button>
    </div>
  );
}