/* global THREE */

import Colors from '../config/colors.js'

const Sea = function() {
  const geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10)
  geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI / 2))
  geom.mergeVertices()
  const l = geom.vertices.length

  this.waves = []
  for (let i = 0;i < l;i++) {
    const v = geom.vertices[i]
    this.waves.push({y:v.y,
      x:v.x,
      z:v.z,
      ang:Math.random() * Math.PI * 2,
      amp:5 + Math.random() * 15,
      speed:0.016 + Math.random() * 0.032
    })
  };
  const mat = new THREE.MeshPhongMaterial({
    color:Colors.blue,
    transparent:true,
    opacity:.8,
    shading:THREE.FlatShading,
  })

  this.mesh = new THREE.Mesh(geom, mat)
  this.mesh.receiveShadow = true
  this.mesh.position.y = -600
}

Sea.prototype.moveWaves = function() {
  const verts = this.mesh.geometry.vertices
  const l = verts.length
  for (let i = 0; i < l; i++) {
    const v = verts[i]
    const vprops = this.waves[i]
    v.x =  vprops.x + Math.cos(vprops.ang) * vprops.amp
    v.y = vprops.y + Math.sin(vprops.ang) * vprops.amp
    vprops.ang += vprops.speed
  }
  this.mesh.geometry.verticesNeedUpdate = true
  this.mesh.rotation.z += .005
}

export default Sea
