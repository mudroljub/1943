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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global THREE */

const camera = new THREE.PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 1, 1000
)
camera.position.set(-142, 102, 41) // z: 0 stavlja kameru iza

/* harmony default export */ __webpack_exports__["a"] = (camera);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global THREE */

const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true // baca senku
document.getElementById('world').appendChild(renderer.domElement)

/* harmony default export */ __webpack_exports__["a"] = (renderer);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Avion;
let keyPressed = false
const rotationAngle = 0.02
const maxRotation = Math.PI / 3
const displacement = 5
const minHeight = 50

function Avion(model) {

  const avion = model
  avion.traverse(child => child.castShadow = true)
  avion.scale.set(.25, .25, .25)
  avion.position.y = 100
  avion.rotation.y = Math.PI / 2

  avion.normalizePlane = () => {
    if (keyPressed) return
    const aberration = Math.abs(avion.rotation.z)
    if (avion.rotation.z > 0) avion.rotation.z -= aberration * 0.25
    if (avion.rotation.z < 0) avion.rotation.z += aberration * 0.25
  }

  document.onkeydown = e => {
    console.log(avion.position.y)
    keyPressed = true
    switch (e.keyCode) {
    case 65:
      avion.position.z -= displacement
      if(avion.rotation.z > -maxRotation)
        avion.rotation.z -= rotationAngle
      break
    case 68:
      avion.position.z += displacement
      if (avion.rotation.z < maxRotation)
        avion.rotation.z += rotationAngle
      break
    case 87:
      if (avion.position.y > minHeight)
        avion.position.y -= displacement * 0.5
      // avion.rotation.y += rotationAngle
      break
    case 83:
      avion.position.y += displacement * 0.5
      // avion.rotation.y -= rotationAngle
      break
    }
  }

  document.onkeyup = () => keyPressed = false

  return avion
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = (ground);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_js__ = __webpack_require__(0);
/* global THREE */



const controls = new THREE.OrbitControls(__WEBPACK_IMPORTED_MODULE_1__camera_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__renderer_js__["a" /* default */].domElement)

/* harmony default export */ __webpack_exports__["a"] = (controls);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* global THREE */

const loader = new THREE.ColladaLoader()
loader.options.convertUpAxis = true

/* harmony default export */ __webpack_exports__["a"] = (loader);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DirectionalLight__ = __webpack_require__(8);
/* global THREE */



const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0xE5C5AB, 200, 950)
scene.add(
  new THREE.HemisphereLight(0xD7D2D2, 0x302B2F, .9),
  new __WEBPACK_IMPORTED_MODULE_0__DirectionalLight__["a" /* default */](0xffffff, .9),
  new THREE.AmbientLight(0x302B2F, .5)
)

/* harmony default export */ __webpack_exports__["a"] = (scene);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_scene__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_camera__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_renderer__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scene_loader__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scene_controls__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actors_ground__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actors_Avion__ = __webpack_require__(2);








let avion
const mousePos = {x: 0, y: 0}

/* FUNCTIONS */

const handleMouseMove = event => {
  mousePos.x = -1 + (event.clientX / window.innerWidth) * 2
  mousePos.y = 1 - (event.clientY / window.innerHeight) * 2
}

const update = () => {
  requestAnimationFrame(update)
  __WEBPACK_IMPORTED_MODULE_4__scene_controls__["a" /* default */].update()
  __WEBPACK_IMPORTED_MODULE_5__actors_ground__["a" /* default */].rotate()
  // airplane.update(mousePos)
  avion.normalizePlane()
  __WEBPACK_IMPORTED_MODULE_1__scene_camera__["a" /* default */].lookAt(avion.position)
  __WEBPACK_IMPORTED_MODULE_2__scene_renderer__["a" /* default */].render(__WEBPACK_IMPORTED_MODULE_0__scene_scene__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__scene_camera__["a" /* default */])
}

const init = collada => {
  avion = new __WEBPACK_IMPORTED_MODULE_6__actors_Avion__["a" /* default */](collada.scene)
  __WEBPACK_IMPORTED_MODULE_0__scene_scene__["a" /* default */].add(avion, __WEBPACK_IMPORTED_MODULE_5__actors_ground__["a" /* default */])
  update()
}

/* EVENTS */

__WEBPACK_IMPORTED_MODULE_3__scene_loader__["a" /* default */].load('/assets/me-109/model.dae', init)
document.addEventListener('mousemove', handleMouseMove)


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



/***/ })
/******/ ]);