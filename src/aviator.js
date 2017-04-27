import scene from './scene/scene'
import camera from './scene/camera'
import renderer from './scene/renderer'
import loader from './scene/loader'
import controls from './scene/controls'
import ground from './actors/ground'

let avion
const mousePos = {x: 0, y: 0}

/* FUNCTIONS */

function handleMouseMove(event) {
  mousePos.x = -1 + (event.clientX / window.innerWidth) * 2
  mousePos.y = 1 - (event.clientY / window.innerHeight) * 2
}

function update() {
  requestAnimationFrame(update)
  controls.update()
  ground.rotate()
  // airplane.update(mousePos)
  camera.lookAt(avion.position)
  console.log(camera.position)
  renderer.render(scene, camera)
}

const init = collada => {
  avion = collada.scene
  avion.traverse(child => child.castShadow = true)
  avion.scale.set(.25, .25, .25)
  avion.position.y = 100
  avion.rotation.y = Math.PI / 2
  scene.add(avion, ground)
  update()
}

/* EVENTS */

loader.load('/assets/me-109/model.dae', init)
document.addEventListener('mousemove', handleMouseMove)
