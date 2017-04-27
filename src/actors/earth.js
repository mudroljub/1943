/* global THREE */

const poluprecnik = 500

const geometry = new THREE.SphereGeometry(poluprecnik, 32, 32)
const material = new THREE.MeshBasicMaterial({
  color: 0x91A566
})
const earth = new THREE.Mesh(geometry, material)

earth.rotation.x = -Math.PI / 2
earth.position.y = -poluprecnik

export default earth
