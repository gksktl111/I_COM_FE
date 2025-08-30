/* eslint-disable @typescript-eslint/no-unused-vars */
// Minimal Naver Maps (v3) types used within this project

declare namespace NaverMaps {
  class LatLng {
    constructor(lat: number, lng: number);
  }

  class Map {
    constructor(
      el: HTMLElement,
      options: {
        center: LatLng;
        zoom?: number;
      },
    );
  }

  class Marker {
    constructor(options: { position: LatLng; map: Map });
  }
}

declare global {
  interface Window {
    naver?: { maps: typeof NaverMaps };
    __naver_maps_loaded?: boolean;
    __initNaverMaps?: () => void;
  }
}

export {};
