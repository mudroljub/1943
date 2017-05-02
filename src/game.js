import scene from './scene/scene'
import camera from './scene/camera'
import renderer from './scene/renderer'
import loader from './scene/loader'
import controls from './scene/controls'
import ground from './actors/ground'
import Avion from './actors/Avion'

let avion
const mousePos = {x: 0, y: 0}

/* FUNCTIONS */

const handleMouseMove = event => {
  mousePos.x = -1 + (event.clientX / window.innerWidth) * 2
  mousePos.y = 1 - (event.clientY / window.innerHeight) * 2
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

loader.load('assets/me-109/model.dae', init)
document.addEventListener('mousemove', handleMouseMove)
