/* global THREE */

import Scene from './actors/Scene'
import Sea from './actors/Sea'
import Sky from './actors/Sky'
import handleWindowResize from './helpers/handleWindowResize'
import normalize from './helpers/normalize'

let avion
const mousePos = {x: 0, y: 0}

/* INIT */

const scene = new Scene()
const camera = new THREE.PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 1, 10000
)
camera.position.set(-15, 100, 10) // z 0 stavlja kameru iza

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

const handleMouseMove = event => {
	// normalized value between -1 and 1
  mousePos.x = -1 + (event.clientX / window.innerWidth) * 2
  mousePos.y = 1 - (event.clientY / window.innerHeight) * 2
}

const updatePlane = mousePos => {
  const targetX = normalize(mousePos.x, -.75, .75, -100, 100)
  const targetY = normalize(mousePos.y, -.75, .75, 25, 175)

  avion.position.x += (targetX - avion.position.x) * 0.005
  avion.position.y += (targetY - avion.position.y) * 0.01

  avion.rotation.x = (avion.position.y - targetY) * 0.0064
  avion.rotation.z = (targetY - avion.position.y) * 0.0128
}

const update = () => {
  sea.moveWaves()
  sky.mesh.rotation.z += .01
  updatePlane(mousePos)
  camera.lookAt(avion.position)
  renderer.render(scene, camera)
  requestAnimationFrame(update)
}

/* EXEC */

loader.load('/assets/santos-dumont-9/model.dae', collada => {
  avion = collada.scene
  avion.position.y = 100
  scene.add(avion)
  update()
})

/* EVENTS */

window.addEventListener('resize', () => handleWindowResize(renderer, camera))
document.addEventListener('mousemove', handleMouseMove)
