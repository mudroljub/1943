/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const Colors = {
  red: 0xf25346,
  white: 0xd8d0d1,
  brown: 0x59332e,
  pink: 0xF5986E,
  brownDark: 0x23190f,
  blue: 0x68c3c0,
}

/* harmony default export */ __webpack_exports__["a"] = (Colors);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = handleWindowResize;
function handleWindowResize(renderer, camera) {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_normalize__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Pilot__ = __webpack_require__(9);
/* global THREE */




const pilot = new __WEBPACK_IMPORTED_MODULE_2__Pilot__["a" /* default */]()
pilot.mesh.position.set(0, 25, 0)

// cabin
const geomCockpit = new THREE.BoxGeometry(80, 50, 50, 1, 1, 1)
const matCockpit = new THREE.MeshPhongMaterial({color:__WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].red,
  shading:THREE.FlatShading
})
// vertices array
geomCockpit.vertices[4].y -= 10
geomCockpit.vertices[4].z += 20
geomCockpit.vertices[5].y -= 10
geomCockpit.vertices[5].z -= 20
geomCockpit.vertices[6].y += 30
geomCockpit.vertices[6].z += 20
geomCockpit.vertices[7].y += 30
geomCockpit.vertices[7].z -= 20

const cockpit = new THREE.Mesh(geomCockpit, matCockpit)

// engine
const geomEngine = new THREE.BoxGeometry(20, 50, 50, 1, 1, 1)
const matEngine = new THREE.MeshPhongMaterial({
  color: __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].white,
  shading: THREE.FlatShading
})
const engine = new THREE.Mesh(geomEngine, matEngine)
engine.position.x = 40

// tail
const geomTailPlane = new THREE.BoxGeometry(15, 20, 5, 1, 1, 1)
const matTailPlane = new THREE.MeshPhongMaterial({
  color: __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].red,
  shading: THREE.FlatShading
})
const tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane)
tailPlane.position.set(-35, 25, 0)

// wing
const geomSideWing = new THREE.BoxGeometry(40, 8, 150, 1, 1, 1)
const matSideWing = new THREE.MeshPhongMaterial({
  color: __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].red,
  shading: THREE.FlatShading
})
const sideWing = new THREE.Mesh(geomSideWing, matSideWing)

// blades
const geomBlade = new THREE.BoxGeometry(1, 100, 20, 1, 1, 1)
const matBlade = new THREE.MeshPhongMaterial({
  color: __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].brownDark,
  shading: THREE.FlatShading
})
const blade = new THREE.Mesh(geomBlade, matBlade)
blade.position.x = 8

// propeller
const geomPropeller = new THREE.BoxGeometry(20, 10, 10, 1, 1, 1)
const matPropeller = new THREE.MeshPhongMaterial({
  color: __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].brown,
  shading: THREE.FlatShading
})
const propeller = new THREE.Mesh(geomPropeller, matPropeller)
propeller.add(blade)
propeller.position.x = 50


class AirPlane {
  constructor() {
    this.mesh = new THREE.Object3D()
    ;[cockpit, engine, tailPlane, sideWing, propeller].map(m => {
      m.castShadow = m.receiveShadow = true
      this.mesh.add(m)
    })
    this.mesh.castShadow = this.mesh.receiveShadow = true
    this.mesh.scale.set(.25, .25, .25)
    this.mesh.position.y = 100
    this.propeller = propeller
    this.pilot = pilot
    this.mesh.add(pilot.mesh)
  }

  update(mousePos) {
    const targetY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_normalize__["a" /* default */])(mousePos.y, -.75, .75, 25, 175)
    const targetX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers_normalize__["a" /* default */])(mousePos.x, -.75, .75, -100, 100)

    // Move the plane at each frame by adding a fraction of the remaining distance
    this.mesh.position.y += (targetY - this.mesh.position.y) * 0.1
    this.mesh.position.x += (targetX - this.mesh.position.x) * 0.05

    // Rotate the plane proportionally to the remaining distance
    this.mesh.rotation.z = (targetY - this.mesh.position.y) * 0.0128
    this.mesh.rotation.x = (this.mesh.position.y - targetY) * 0.0064
    this.propeller.rotation.x += 0.3
    this.pilot.updateHairs()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AirPlane;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DirectionalLight__ = __webpack_require__(8);
/* global THREE */



class ClassName extends THREE.Scene {
  constructor() {
    super()
    this.fog = new THREE.Fog(0xf7d9aa, 100, 950)
    this.add(
      new THREE.HemisphereLight(0xaaaaaa, 0x000000, .9),
      new __WEBPACK_IMPORTED_MODULE_0__DirectionalLight__["a" /* default */](0xffffff, .9),
      new THREE.AmbientLight(0xdc8874, .5)
    )
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClassName;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__ = __webpack_require__(0);
/* global THREE */



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
    color:__WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].blue,
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

/* harmony default export */ __webpack_exports__["a"] = (Sea);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cloud__ = __webpack_require__(7);
/* global THREE */



class RandCloud extends __WEBPACK_IMPORTED_MODULE_0__Cloud__["a" /* default */] {
  constructor(stepAngle, i) {
    super()
    const angle = stepAngle * i
    const distance = 750 + Math.random() * 200 // distance from center
    // convert polar coordinates (angle, distance) into Cartesian (x, y)
    this.mesh.position.y = Math.sin(angle) * distance
    this.mesh.position.x = Math.cos(angle) * distance
    // rotate according its position
    this.mesh.rotation.z = angle + Math.PI / 2
    this.mesh.position.z = -400 - Math.random() * 400
    const scalar = 1 + Math.random() * 2
    this.mesh.scale.set(scalar, scalar, scalar)
  }
}

class Sky {
  constructor() {
    this.mesh = new THREE.Object3D()
    this.nClouds = 20 // number of clouds
    const stepAngle = Math.PI * 2 / this.nClouds
    for (let i = 0; i < this.nClouds; i++) {
      const c = new RandCloud(stepAngle, i)
      this.mesh.add(c.mesh)
    }
    this.mesh.position.y = -600
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sky;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalize;
function normalize(v, vmin, vmax, tmin, tmax) {
  const nv = Math.max(Math.min(v, vmax), vmin)
  const dv = vmax - vmin
  const pc = (nv - vmin) / dv
  const dt = tmax - tmin
  const tv = tmin + (pc * dt)
  return tv
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__ = __webpack_require__(0);
/* global THREE */


const geom = new THREE.BoxGeometry(20, 20, 20)
const material = new THREE.MeshPhongMaterial({color: __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].white})

class CloudPart extends THREE.Mesh {
  constructor(i) {
    super(geom, material)
      // set the position and the rotation of each cube randomly
    this.position.x = i * 15
    this.position.y = Math.random() * 10
    this.position.z = Math.random() * 10
    this.rotation.z = Math.random() * Math.PI * 2
    this.rotation.y = Math.random() * Math.PI * 2
      // set the size of the cube randomly
    const s = .1 + Math.random() * .9
    this.scale.set(s, s, s)
      // allow each cube to cast and to receive shadows
    this.castShadow = true
    this.receiveShadow = true
  }
}

class Cloud {
  constructor() {
    this.mesh = new THREE.Object3D()
    const number = 3 + Math.floor(Math.random() * 3)
    for (let i = 0; i < number; i++) {
      this.mesh.add(new CloudPart(i))
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cloud;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global THREE */

class DirectionalLight extends THREE.DirectionalLight {
  constructor(color, percent) {
    super(color, percent)
    this.position.set(150, 350, 350)
    this.castShadow = true
    // define the visible area of the projected shadow
    this.shadow.camera.left = -400
    this.shadow.camera.right = 400
    this.shadow.camera.top = 400
    this.shadow.camera.bottom = -400
    this.shadow.camera.near = 1
    this.shadow.camera.far = 1000
    // shadow resolution
    this.shadow.mapSize.width = 2048
    this.shadow.mapSize.height = 2048
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DirectionalLight;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__ = __webpack_require__(0);
/* global THREE */


const Pilot = function() {
  this.mesh = new THREE.Object3D()
  this.mesh.name = 'pilot'

	// angleHairs is a property used to animate the hair later
  this.angleHairs = 0

	// Body of the pilot
  const bodyGeom = new THREE.BoxGeometry(15, 15, 15)
  const bodyMat = new THREE.MeshPhongMaterial({color:__WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].brown, shading:THREE.FlatShading})
  const body = new THREE.Mesh(bodyGeom, bodyMat)
  body.position.set(2, -12, 0)
  this.mesh.add(body)

	// Face of the pilot
  const faceGeom = new THREE.BoxGeometry(10, 10, 10)
  const faceMat = new THREE.MeshLambertMaterial({color:__WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].pink})
  const face = new THREE.Mesh(faceGeom, faceMat)
  this.mesh.add(face)

	// Hair element
  const hairGeom = new THREE.BoxGeometry(4, 4, 4)
  const hairMat = new THREE.MeshLambertMaterial({color:__WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].brown})
  const hair = new THREE.Mesh(hairGeom, hairMat)
	// Align the shape of the hair to its bottom boundary, that will make it easier to scale.
  hair.geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 2, 0))

	// create a container for the hair
  const hairs = new THREE.Object3D()

	// create a container for the hairs at the top
	// of the head (the ones that will be animated)
  this.hairsTop = new THREE.Object3D()

	// create the hairs at the top of the head
	// and position them on a 3 x 4 grid
  for (let i = 0; i < 12; i++) {
    const h = hair.clone()
    const col = i % 3
    const row = Math.floor(i / 3)
    const startPosZ = -4
    const startPosX = -4
    h.position.set(startPosX + row * 4, 0, startPosZ + col * 4)
    this.hairsTop.add(h)
  }
  hairs.add(this.hairsTop)

	// create the hairs at the side of the face
  const hairSideGeom = new THREE.BoxGeometry(12, 4, 2)
  hairSideGeom.applyMatrix(new THREE.Matrix4().makeTranslation(-6, 0, 0))
  const hairSideR = new THREE.Mesh(hairSideGeom, hairMat)
  const hairSideL = hairSideR.clone()
  hairSideR.position.set(8, -2, 6)
  hairSideL.position.set(8, -2, -6)
  hairs.add(hairSideR)
  hairs.add(hairSideL)

	// create the hairs at the back of the head
  const hairBackGeom = new THREE.BoxGeometry(2, 8, 10)
  const hairBack = new THREE.Mesh(hairBackGeom, hairMat)
  hairBack.position.set(-1, -4, 0)
  hairs.add(hairBack)
  hairs.position.set(-5, 5, 0)

  this.mesh.add(hairs)

  const glassGeom = new THREE.BoxGeometry(5, 5, 5)
  const glassMat = new THREE.MeshLambertMaterial({color:__WEBPACK_IMPORTED_MODULE_0__konfig_colors_js__["a" /* default */].brown})
  const glassR = new THREE.Mesh(glassGeom, glassMat)
  glassR.position.set(6, 0, 3)
  const glassL = glassR.clone()
  glassL.position.z = -glassR.position.z

  const glassAGeom = new THREE.BoxGeometry(11, 1, 11)
  const glassA = new THREE.Mesh(glassAGeom, glassMat)
  this.mesh.add(glassR)
  this.mesh.add(glassL)
  this.mesh.add(glassA)

  const earGeom = new THREE.BoxGeometry(2, 3, 2)
  const earL = new THREE.Mesh(earGeom, faceMat)
  earL.position.set(0, 0, -6)
  const earR = earL.clone()
  earR.position.set(0, 0, 6)
  this.mesh.add(earL)
  this.mesh.add(earR)
}

Pilot.prototype.updateHairs = function() {
	// get the hair
  const hairs = this.hairsTop.children
	// update them according to the angle angleHairs
  const l = hairs.length
  for (let i = 0; i < l; i++) {
    const h = hairs[i]
		// each hair element will scale on cyclical basis between 75% and 100% of its original size
    h.scale.y = .75 + Math.cos(this.angleHairs + i / 3) * .25
  }
	// increment the angle for the next frame
  this.angleHairs += 0.16
}

/* harmony default export */ __webpack_exports__["a"] = (Pilot);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__klase_Scene__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__klase_Sea__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__klase_Sky__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__klase_AirPlane__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_handleWindowResize__ = __webpack_require__(1);
/* global THREE */







const mousePos = {x: 0, y: 0}

/* INIT */

const scene = new __WEBPACK_IMPORTED_MODULE_0__klase_Scene__["a" /* default */]()
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

const sea = new __WEBPACK_IMPORTED_MODULE_1__klase_Sea__["a" /* default */]()
const sky = new __WEBPACK_IMPORTED_MODULE_2__klase_Sky__["a" /* default */]()
const airplane = new __WEBPACK_IMPORTED_MODULE_3__klase_AirPlane__["a" /* default */]()

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

window.addEventListener('resize', () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__helpers_handleWindowResize__["a" /* default */])(renderer, camera))
document.addEventListener('mousemove', handleMouseMove)


/***/ })
/******/ ]);