/* global THREE */

const loader = new THREE.ColladaLoader()
loader.options.convertUpAxis = true

export default loader
