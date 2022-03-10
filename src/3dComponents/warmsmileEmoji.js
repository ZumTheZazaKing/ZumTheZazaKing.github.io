import * as THREE from 'three';
import WarmSmile from '../images/warmSmile.jpg';

const planeTexture = new THREE.TextureLoader().load(WarmSmile);

export const warmSmileEmoji = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshStandardMaterial({map:planeTexture,})
)
warmSmileEmoji.position.set(62,6,52)

export const rotateWarmSmileEmoji = () => {
    warmSmileEmoji.rotation.y += 0.1
}