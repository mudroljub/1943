/* global THREE */
const camera = new THREE.PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 1, 10000
)
camera.position.set(-7, 15, 15)

export default camera
