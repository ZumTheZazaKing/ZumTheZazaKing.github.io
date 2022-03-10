import * as THREE from 'three';
import { torus, moveTorus } from './3dComponents/ppRing';
import { zahidi, rotateCube } from './3dComponents/ppCube';
import { moon, rotateMoon } from './3dComponents/moon';
import { warmSmileEmoji, rotateWarmSmileEmoji } from './3dComponents/warmsmileEmoji';
import { weatherAppSign } from './3dComponents/projects/weatherappimage';
import { memeGeneratorSign } from './3dComponents/projects/memegeneratorimage';
import { qtpionlineSign } from './3dComponents/projects/qtpionlineimage';
import { areyoudepressedSign } from './3dComponents/projects/areyoudepressedimage';
import { qtpidiscordSign } from './3dComponents/projects/qtpidiscordimage';
import addStar from './3dComponents/stars';
import Space from './images/space.jpeg'
import { lazy, Suspense } from 'react';
import Loading from './components/Loading'
import { ToastContainer } from 'react-toastify';
import BackToTop from "react-back-to-top-button";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'react-toastify/dist/ReactToastify.css';

const Header = lazy(() => import('./components/Header').then(module => ({ default: module.Header })));
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const WeatherApp = lazy(() => import('./components/projects/WeatherApp').then(module => ({ default: module.WeatherApp })));
const MemeGenerator = lazy(() => import('./components/projects/MemeGenerator').then(module => ({ default: module.MemeGenerator })));
const QTPIOnline = lazy(() => import('./components/projects/QTPIOnline').then(module => ({ default: module.QTPIOnline })));
const AreYouDepressed = lazy(() => import('./components/projects/AreYouDepressed').then(module => ({ default: module.AreYouDepressed })));
const QTPIDiscord = lazy(() => import('./components/projects/QTPIDiscord').then(module => ({ default: module.QTPIDiscord })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Socials = lazy(() => import('./components/Socials').then(module => ({ default: module.Socials })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

//Setting initial camera position
function setInitialCameraPosition(){
  const topDistance = document.body.getBoundingClientRect().top - 600
  camera.position.z = topDistance * -0.01
  camera.position.x = topDistance * -0.01 - 9
  camera.position.y = topDistance * -0.001
}
setInitialCameraPosition()

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(230,20,20)

//Lighting for everything
const ambientLight = new THREE.AmbientLight(0xffffff)
//To generate the random stars
Array(400).fill().forEach(addStar)
//To load the space background
const spaceTexture = new THREE.TextureLoader().load(Space);
scene.background = spaceTexture


//Adding the 3d components to the scene
scene.add(
  torus, 
  pointLight, 
  ambientLight, 
  zahidi, 
  moon,
  weatherAppSign,
  memeGeneratorSign,
  qtpionlineSign,
  areyoudepressedSign,
  qtpidiscordSign,
  warmSmileEmoji
)

function moveCamera(){
  const topDistance = document.body.getBoundingClientRect().top - 600
  rotateMoon()
  rotateCube()
  camera.position.z = topDistance * -0.01
  camera.position.x = topDistance * -0.01 - 9
  camera.position.y = topDistance * -0.001
}
document.body.onscroll = moveCamera

function animate(){
  requestAnimationFrame(animate)
  moveTorus()
  rotateWarmSmileEmoji()
  renderer.render(scene,camera)
}
animate()

function App() {

  return (
    <div className='App'>
      <Suspense fallback={<Loading/>}>

        <Header/>
        <About/>

        <Projects/>
        <WeatherApp/>
        <MemeGenerator/>
        <QTPIOnline/>
        <AreYouDepressed/>
        <QTPIDiscord/>

        <Contact/>
        <Socials/>
        <Footer/>

        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <BackToTop showAt={500} speed={1000}>
          <p className='backToTop'>RETURN TO CENTER</p>
        </BackToTop>
      </Suspense>
    </div>
  );
}

export default App;
