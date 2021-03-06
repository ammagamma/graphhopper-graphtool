// specifies where map tiles should be served from. for example you can use
// https://openmaptiles.org/docs/website/mapbox-gl-js/ or
// https://www.maptiler.com/cloud/
export const tilesUrl = 'https://maps.tilehosting.com/styles/streets/style.json?key=yrAYvi6TTYgg9U5mBtiY';

// specifies where grapphopper server is running
export const ghUrl = 'http://localhost:8989/';

if (tilesUrl.length === 0) {
    console.error('you need to set a tiles url in src/config.js');
    alert('you need to set a tiles url in src/config.js');
}
