/* global THREE */

import Cloud from './Cloud'

class RandCloud extends Cloud {
  constructor(stepAngle, i) {
    super()
    const angle = stepAngle * i
    const distance = 750 + Math.random() * 200 // distance from center
    // convert polar coordinates (angle, distance) into Cartesian (x, y)
    this.mesh.position.y = Math.sin(angle) * distance
    this.mesh.position.x = Math.cos(angle) * distance
    // rotate according its position
    this.mesh.rotation.z = angle + Math.PI / 2
    this.mesh.position.z = -400 - Math.random() * 400
    const scalar = 1 + Math.random() * 2
    this.mesh.scale.set(scalar, scalar, scalar)
  }
}

export default class Sky {
  constructor() {
    this.mesh = new THREE.Object3D()
    this.nClouds = 20 // number of clouds
    const stepAngle = Math.PI * 2 / this.nClouds
    for (let i = 0; i < this.nClouds; i++) {
      const c = new RandCloud(stepAngle, i)
      this.mesh.add(c.mesh)
    }
    this.mesh.position.y = -600
  }
}
