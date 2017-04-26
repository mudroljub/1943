/* global THREE */
import Colors from '../config/colors.js'
import normalize from '../helpers/normalize'
import Pilot from './Pilot'

const pilot = new Pilot()
pilot.mesh.position.set(0, 25, 0)

// cabin
const geomCockpit = new THREE.BoxGeometry(80, 50, 50, 1, 1, 1)
const matCockpit = new THREE.MeshPhongMaterial({color:Colors.red,
  shading:THREE.FlatShading
})
// vertices array
geomCockpit.vertices[4].y -= 10
geomCockpit.vertices[4].z += 20
geomCockpit.vertices[5].y -= 10
geomCockpit.vertices[5].z -= 20
geomCockpit.vertices[6].y += 30
geomCockpit.vertices[6].z += 20
geomCockpit.vertices[7].y += 30
geomCockpit.vertices[7].z -= 20

const cockpit = new THREE.Mesh(geomCockpit, matCockpit)

// engine
const geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1)
const matEngine = new THREE.MeshPhongMaterial({
  color: Colors.white,
  shading: THREE.FlatShading
})
const engine = new THREE.Mesh(geomEngine, matEngine)
engine.position.x = 40

// tail
const geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1)
const matTailPlane = new THREE.MeshPhongMaterial({
  color: Colors.red,
  shading: THREE.FlatShading
})
const tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane)
tailPlane.position.set(-35, 25, 0)

// wing
const geomSideWing = new THREE.BoxGeometry(40, 8, 150, 1, 1, 1)
const matSideWing = new THREE.MeshPhongMaterial({
  color: Colors.red,
  shading: THREE.FlatShading
})
const sideWing = new THREE.Mesh(geomSideWing, matSideWing)

// blades
const geomBlade = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1)
const matBlade = new THREE.MeshPhongMaterial({
  color: Colors.brownDark,
  shading: THREE.FlatShading
})
const blade = new THREE.Mesh(geomBlade, matBlade)
blade.position.x = 8

// propeller
const geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1)
const matPropeller = new THREE.MeshPhongMaterial({
  color: Colors.brown,
  shading: THREE.FlatShading
})
const propeller = new THREE.Mesh(geomPropeller, matPropeller)
propeller.add(blade)
propeller.position.x = 50


export default class AirPlane {
  constructor() {
    this.mesh = new THREE.Object3D()
    ;[cockpit, engine, tailPlane, sideWing, propeller].map(m => {
      m.castShadow = m.receiveShadow = true
      this.mesh.add(m)
    })
    this.mesh.castShadow = this.mesh.receiveShadow = true
    this.mesh.scale.set(.25, .25, .25)
    this.mesh.position.y = 100
    this.propeller = propeller
    this.pilot = pilot
    this.mesh.add(pilot.mesh)
  }

  update(mousePos) {
    const targetY = normalize(mousePos.y, -.75, .75, 25, 175)
    const targetX = normalize(mousePos.x, -.75, .75, -100, 100)

    // Move the plane at each frame by adding a fraction of the remaining distance
    this.mesh.position.y += (targetY - this.mesh.position.y) * 0.1
    this.mesh.position.x += (targetX - this.mesh.position.x) * 0.05

    // Rotate the plane proportionally to the remaining distance
    this.mesh.rotation.z = (targetY - this.mesh.position.y) * 0.0128
    this.mesh.rotation.x = (this.mesh.position.y - targetY) * 0.0064
    this.propeller.rotation.x += 0.3
    this.pilot.updateHairs()
  }
}
