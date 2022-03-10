import * as THREE from 'three';
import WeatherAppImg from '../../images/projects/weatherapp.png';

const planeTexture = new THREE.TextureLoader().load(WeatherAppImg);

export const weatherAppSign = new THREE.Mesh(
    new THREE.PlaneGeometry(8,4),
    new THREE.MeshBasicMaterial({map:planeTexture, side: THREE.DoubleSide})
)

weatherAppSign.position.setZ(20)
weatherAppSign.position.setX(14)
weatherAppSign.position.setY(2)