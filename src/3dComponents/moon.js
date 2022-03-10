import * as THREE from 'three';
import Moon from '../images/moon.jpeg';
import MoonNormal from '../images/moonNormal.jpeg'

const moonTexture = new THREE.TextureLoader().load(Moon)
const normalTexture = new THREE.TextureLoader().load(MoonNormal)

export const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshStandardMaterial({
        map:moonTexture,
        normalMap:normalTexture
    })
)

export const rotateMoon = () => {
    moon.rotation.x += 0.05
    moon.rotation.y += 0.075
    moon.rotation.z += 0.05
}

moon.position.setZ(10)
moon.position.setX(14)