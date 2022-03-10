import * as THREE from 'three';
import QTPIOnlineImg from '../../images/projects/qtpionline.png';

const planeTexture = new THREE.TextureLoader().load(QTPIOnlineImg);

export const qtpionlineSign = new THREE.Mesh(
    new THREE.PlaneGeometry(8,4),
    new THREE.MeshBasicMaterial({map: planeTexture, side: THREE.DoubleSide})
)

qtpionlineSign.position.setZ(35)
qtpionlineSign.position.setX(29)
qtpionlineSign.position.setY(4)