/* global THREE */

const geometry = new THREE.CylinderGeometry(3000, 3000, 4000, 200, 50)
geometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2))
geometry.mergeVertices()

const material = new THREE.MeshPhongMaterial({
  color: 0x91A566,
  transparent: true,
  opacity: .8,
  shading: THREE.FlatShading,
})

const ground = new THREE.Mesh(geometry, material)
ground.receiveShadow = true
ground.position.y = -3000

const waves = []
geometry.vertices.map(vertex => {
  waves.push({
    y: vertex.y,
    x: vertex.x,
    z: vertex.z,
    ang: Math.random() * Math.PI * 2,
    amp: 5 + Math.random() * 15,
    speed: 0.016 + Math.random() * 0.032
  })
})

ground.rotate = function() {
  geometry.vertices.map((vertex, i) => {
    const wave = waves[i]
    vertex.x = wave.x + Math.cos(wave.ang) * wave.amp
    vertex.y = wave.y + Math.sin(wave.ang) * wave.amp
    wave.ang += wave.speed
  })
  geometry.verticesNeedUpdate = true
  ground.rotation.z += .005
}

export default ground
