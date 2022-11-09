//JS For Spinning Globe

import createGlobe from 'https://cdn.skypack.dev/cobe'

let phi = 0
let canvas = document.getElementById("cobe")

const globe = createGlobe(canvas, {
    devicePixelRatio: 2,
    width: 1000,
    height: 1000,
    phi: 0,
    theta: 0,
    dark: 0.75,
    diffuse: 1.2,
    scale: 1.25,
    mapSamples: 4300,
    mapBrightness: 12,
    baseColor: [0.55, 0.85, 1],
    markerColor: [1, 1, 1],
    glowColor: [1, 1, 1],
    opacity: 0.45,
    offset: [0, 0],
    markers: [
        { location: [37.7595, -122.4367], size: 0 },
        { location: [40.7128, -74.006], size: 0 },
    ],
    onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01
    },
})
