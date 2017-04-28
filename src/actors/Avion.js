let keyPressed = false
const rotationAngle = 0.02
const maxRotation = Math.PI / 3
const displacement = 5
const minHeight = 50

export default function Avion(model) {

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
