"use client";
import React, { useEffect } from "react";
import { ReactPixelTrack } from "./reactPixel";

export const FacebookPixelEvents: React.FC = () => {
  useEffect(() => {
    ReactPixelTrack().then((ReactPixel) => {
      ReactPixel.pageView();
    });
  }, []);

  return null;
};
