import * as THREE from 'three';
import MemeGeneratorImg from '../../images/projects/memegenerator.png';

const planeTexture = new THREE.TextureLoader().load(MemeGeneratorImg);

export const memeGeneratorSign = new THREE.Mesh(
    new THREE.PlaneGeometry(10,6),
    new THREE.MeshBasicMaterial({map: planeTexture})
)

memeGeneratorSign.position.setZ(26)
memeGeneratorSign.position.setX(27)
memeGeneratorSign.position.setY(3)