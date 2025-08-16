"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import PreScreen from "@/components/pre-screen";

export default function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showPreScreen, setShowPreScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we should show the pre-screen
    const showVideo = searchParams.get('video');
    
    if (showVideo === 'true') {
      setShowPreScreen(true);
      setIsLoading(false);
      return;
    }
    
    // Check if user has already entered the site in this session
    const hasEntered = sessionStorage.getItem('hasEntered');
    if (!hasEntered) {
      setShowPreScreen(true);
    }
    setIsLoading(false);
  }, [searchParams]);

  const handleEnter = () => {
    sessionStorage.setItem('hasEntered', 'true');
    // Remove the video parameter from URL
    router.push('/');
    setShowPreScreen(false);
  };

  if (isLoading) {
    return null; // Prevent flash of content
  }

  if (showPreScreen) {
    return <PreScreen onEnter={handleEnter} />;
  }

  return (
    <main className="flex-1 bg-[#a42b2c] pt-4 relative">
      {/* Coming Soon Overlay */}
      <div className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Próximamente / Coming Soon
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px] px-4 md:px-6 lg:h-[calc(100vh-5rem)] pb-4 lg:grid-rows-1">
        <div className="w-full flex flex-col gap-[10px] lg:h-full lg:overflow-y-auto lg:pr-2 lg:hover:bg-black/5 lg:transition-all lg:duration-200 lg:rounded-sm lg:-m-2 lg:p-2">
          <img
            src="https://i.imgur.com/8qUjSL5.png"
            alt="Column 1"
            className="w-full h-auto object-cover"
          />
          <div className="grid grid-cols-2 gap-[10px]">
            <img
              src="https://i.imgur.com/XEgDviV.png"
              alt="Column 1 Row 2 Left"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://i.imgur.com/bCRV5Ug.jpeg"
              alt="Column 1 Row 2 Right"
              className="w-full h-auto object-cover"
            />
          </div>
          <img
            src="https://i.imgur.com/bkrrNdM.png"
            alt="Column 1 Row 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://i.imgur.com/aktt0DJ.jpeg"
            alt="Column 1 Row 4"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-[10px] lg:h-full lg:overflow-y-auto lg:pr-2 lg:hover:bg-black/5 lg:transition-all lg:duration-200 lg:rounded-sm lg:-m-2 lg:p-2">
          <img
            src="https://i.imgur.com/Glu420Q.jpeg"
            alt="Column 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://i.imgur.com/ouBbwZe.png"
            alt="Column 2 Row 2"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://i.imgur.com/raH3liP.png"
            alt="Column 2 Row 3"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-[10px] lg:h-full lg:overflow-y-auto lg:pr-2 lg:hover:bg-black/5 lg:transition-all lg:duration-200 lg:rounded-sm lg:-m-2 lg:p-2">
          <img
            src="https://i.imgur.com/c2gDwTW.jpeg"
            alt="Column 3"
            className="w-full h-auto object-cover"
          />
          <img
            src="https://i.imgur.com/wQKIK3k.jpeg"
            alt="Column 3 Row 2"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-[10px] lg:h-full lg:overflow-y-auto lg:pr-2 lg:hover:bg-black/5 lg:transition-all lg:duration-200 lg:rounded-sm lg:-m-2 lg:p-2">
          <img
            src="https://i.imgur.com/UeDm3bQ.jpeg"
            alt="Column 4"
            className="w-full h-auto object-cover"
          />
          <div className="grid grid-cols-2 gap-[10px]">
            <img
              src="https://i.imgur.com/P0fAf5i.png"
              alt="Column 4 Row 2 Left"
              className="w-full h-auto object-cover"
            />
            <img
              src="https://i.imgur.com/3gqouTx.jpeg"
              alt="Column 4 Row 2 Right"
              className="w-full h-auto object-cover"
            />
          </div>
          <img
            src="https://i.imgur.com/aSS6Yio.jpeg"
            alt="Column 4 Row 3"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </main>
  );
}