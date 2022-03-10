import * as THREE from 'three'

const geometry = new THREE.TorusGeometry(7,1.5,16,100)
const material = new THREE.MeshStandardMaterial({color:0xFF6347})
export const torus = new THREE.Mesh(geometry,material)

export const moveTorus = () => {
    torus.rotation.x += 0.01
    torus.rotation.z += 0.01
    torus.rotation.y += 0.01
}