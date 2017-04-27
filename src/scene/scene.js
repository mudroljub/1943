/* global THREE */

import DirectionalLight from './DirectionalLight'

const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xf7d9aa, 100, 950)

scene.add(
  new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9),
  new DirectionalLight(0xffffff, .9),
  // new THREE.AmbientLight(0xdc8874, .5)
)

export default scene
