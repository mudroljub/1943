import scene from './scene/scene'
import renderer from './scene/renderer.js'
import camera from './scene/camera.js'
import controls from './scene/controls.js'
import loader from './scene/loader.js'
import earth from './actors/earth.js'

/* CONFIG */

let avion

/* FUNCTIONS */

const update = () => {
  requestAnimationFrame(update)
  controls.update()
  camera.lookAt(avion.position)
  earth.rotation.x += 0.1
  renderer.render(scene, camera)
}

const init = (collada) => {
  avion = collada.scene
  avion.position.y = 1
  avion.rotation.y = Math.PI
  scene.add(avion)
  update()
}

/* INIT */

scene.add(earth)

loader.load('/assets/me-109/model.dae', init)
