import * as THREE from 'three';
import { Mesh } from 'three';
import Zahidi from '../images/zahidi.jpg';

const zahidiTexture = new THREE.TextureLoader().load(Zahidi)

export const zahidi = new Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({map:zahidiTexture})
)

export const rotateCube = () => {
    zahidi.rotation.y += 0.01
    zahidi.rotation.z += 0.01
}