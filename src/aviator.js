/* global THREE */

import Scene from './actors/Scene'
import Sea from './actors/Sea'
import Sky from './actors/Sky'
import AirPlane from './actors/AirPlane'
import handleWindowResize from './helpers/handleWindowResize'

const mousePos = {x: 0, y: 0}

/* INIT */

const scene = new Scene()
const camera = new THREE.PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 1, 10000
)
camera.position.set(-50, 100, 50) // z: 0 stavlja kameru iza

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true // baca senku
document.getElementById('world').appendChild(renderer.domElement)

const sea = new Sea()
const sky = new Sky()
const airplane = new AirPlane()

scene.add(sea.mesh, sky.mesh, airplane.mesh)

/* FUNCTIONS */

function handleMouseMove(event) {
	// normalized value between -1 and 1
  mousePos.x = -1 + (event.clientX / window.innerWidth) * 2
  mousePos.y = 1 - (event.clientY / window.innerHeight) * 2
}

function loop() {
  sea.moveWaves()
  sky.mesh.rotation.z += .01
  airplane.update(mousePos)
  camera.lookAt(airplane.mesh.position)
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}

loop()

/* EVENTS */

window.addEventListener('resize', () => handleWindowResize(renderer, camera))
document.addEventListener('mousemove', handleMouseMove)
