import { ShimmerFeaturedGallery } from "react-shimmer-effects";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-zinc-200">
      <ShimmerFeaturedGallery row={2} col={2} card frameHeight={600} />
    </div>
  );
};

export default Loading;
