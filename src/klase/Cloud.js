/* global THREE */
import Colors from '../konfig/colors.js'

const geom = new THREE.BoxGeometry(20, 20, 20)
const material = new THREE.MeshPhongMaterial({color: Colors.white})

class CloudPart extends THREE.Mesh {
  constructor(i) {
    super(geom, material)
      // set the position and the rotation of each cube randomly
    this.position.x = i * 15
    this.position.y = Math.random() * 10
    this.position.z = Math.random() * 10
    this.rotation.z = Math.random() * Math.PI * 2
    this.rotation.y = Math.random() * Math.PI * 2
      // set the size of the cube randomly
    const s = .1 + Math.random() * .9
    this.scale.set(s, s, s)
      // allow each cube to cast and to receive shadows
    this.castShadow = true
    this.receiveShadow = true
  }
}

export default class Cloud {
  constructor() {
    this.mesh = new THREE.Object3D()
    const number = 3 + Math.floor(Math.random() * 3)
    for (let i = 0; i < number; i++) {
      this.mesh.add(new CloudPart(i))
    }
  }
}
