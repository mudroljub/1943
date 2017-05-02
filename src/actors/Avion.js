let keyPressed = false

const rotationAngle = 0.02
const maxRoll = Math.PI / 3
const maxPitch = Math.PI / 4
const displacement = 5
const minHeight = 50

export default function Avion(model) {

  const avion = model
  avion.traverse(child => child.castShadow = true)
  avion.scale.set(.25, .25, .25)
  avion.position.y = 100

  avion.normalizePlane = () => {
    if (keyPressed) return
    const pitch = Math.abs(avion.rotation.x)
    const roll = Math.abs(avion.rotation.z)
    if (avion.rotation.x > 0) avion.rotation.x -= pitch * 0.25
    if (avion.rotation.x < 0) avion.rotation.x += pitch * 0.25
    if (avion.rotation.z > 0) avion.rotation.z -= roll * 0.25
    if (avion.rotation.z < 0) avion.rotation.z += roll * 0.25
  }

  document.onkeydown = e => {
    keyPressed = true
    switch (e.keyCode) {
    case 65:
      avion.position.x += displacement
      if(avion.rotation.z < maxRoll)
        avion.rotation.z += rotationAngle
      break
    case 68:
      avion.position.x -= displacement
      if (avion.rotation.z > -maxRoll)
        avion.rotation.z -= rotationAngle
      break
    case 87:
      if (avion.position.y > minHeight) avion.position.y -= displacement * 0.5
      // if (avion.rotation.x < maxPitch) avion.rotation.x += rotationAngle
      break
    case 83:
      avion.position.y += displacement * 0.5
      // if (avion.rotation.x > -maxPitch) avion.rotation.x -= rotationAngle
      break
    }
  }

  document.onkeyup = () => keyPressed = false

  return avion
}
