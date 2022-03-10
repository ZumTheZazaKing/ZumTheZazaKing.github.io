import * as THREE from 'three';
import qtpidiscordImg from '../../images/projects/qtpidiscord.png';

const planeTexture = new THREE.TextureLoader().load(qtpidiscordImg);

export const qtpidiscordSign = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 6),
    new THREE.MeshBasicMaterial({map:planeTexture, side: THREE.DoubleSide})
)

qtpidiscordSign.position.set(45, 5, 50)