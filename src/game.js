/* global THREE */

import Scene from './scene/Scene'
import Sea from './actors/Sea'
import Sky from './actors/Sky'

let avion

/* INIT */

const scene = new Scene()
const camera = new THREE.PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 1, 10000
)
camera.position.set(-15, 100, 20) // z 0 stavlja kameru iza

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true // baca senku
document.getElementById('world').appendChild(renderer.domElement)

const sea = new Sea()
const sky = new Sky()

scene.add(sea.mesh, sky.mesh)

const loader = new THREE.ColladaLoader()
loader.options.convertUpAxis = true

/* FUNCTIONS */

const update = () => {
  sea.moveWaves()
  sky.mesh.rotation.z += .01
  camera.lookAt(avion.position)
  renderer.render(scene, camera)
  requestAnimationFrame(update)
}

/* EXEC */

loader.load('/assets/me-109/model.dae', collada => {
  avion = collada.scene
  avion.position.y = 100
  // avion.rotation.y = -Math.PI / 2
  scene.add(avion)
  update()
})
