import * as THREE from 'three';
import areyoudepressedImg from '../../images/projects/areyoudepressed.png';

const planeTexture = new THREE.TextureLoader().load(areyoudepressedImg);

export const areyoudepressedSign = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 4),
    new THREE.MeshBasicMaterial({map: planeTexture, side: THREE.DoubleSide})
)

areyoudepressedSign.position.setZ(42)
areyoudepressedSign.position.setX(41)
areyoudepressedSign.position.setY(4)