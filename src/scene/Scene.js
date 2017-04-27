/* global THREE */

import DirectionalLight from './DirectionalLight'

export default class ClassName extends THREE.Scene {
  constructor() {
    super()
    this.fog = new THREE.Fog(0xf7d9aa, 100, 950)
    this.add(
      new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9),
      new DirectionalLight(0xffffff, .9),
      // new THREE.AmbientLight(0xdc8874, .5)
    )
  }
}
