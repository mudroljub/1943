/* global THREE */
import scene from './scene/scene'
import camera from './scene/camera'
import renderer from './scene/renderer'
import controls from './scene/controls'
import ground from './actors/ground'
import Avion from './actors/Avion'

const mousePos = {x: 0, y: 0}
let avion

/* FUNCTIONS */

const updateMousePos = e => {
  mousePos.x = -1 + (e.clientX / window.innerWidth) * 2
  mousePos.y = 1 - (e.clientY / window.innerHeight) * 2
}

const update = () => {
  requestAnimationFrame(update)
  controls.update()
  ground.rotate()
  avion.normalizePlane()
  camera.lookAt(avion.position)
  renderer.render(scene, camera)
}

const init = collada => {
  avion = new Avion(collada.scene)
  scene.add(avion, ground)
  update()
}

/* EVENTS */

new THREE.ColladaLoader().load('assets/me-109/model.dae', init)
document.addEventListener('mousemove', updateMousePos)
