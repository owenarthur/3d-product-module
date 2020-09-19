import React, { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Easing, Tween, autoPlay } from 'es6-tween';
import TWEEN from '@tweenjs/tween.js';
import styled from 'styled-components';

import TextScroller from './TextScroller.jsx'

const OuterShell = styled.div`
  height: 500vh;
  margin: 0;
  &:focus{
    outline: none
  }
  z-index: 1;
`;

const InnerShell = styled.div`
  position: fixed;
  height: 100vh;
  &:focus{
    outline: none
  }
`;

class SceneClass extends Component {
  constructor(props) {
    super(props)
    this.state = { animating : false, current: 0}
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.tweenCamera = this.tweenCamera.bind(this);
    this.checkForScroll = this.checkForScroll.bind(this);
    this.updateTween = this.updateTween.bind(this);
  }

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 15 , width/height, 0.1, 10000 );
    camera.position.set( 70, 40, 100 );



    const renderer = new THREE.WebGLRenderer({ alpha : true });
    renderer.setClearColor( 0xFFFFFF, 0);
    // renderer.setClearColor( 0xD3D3D3, 1);
    renderer.setSize( this.props.width, this.props.height );
    renderer.autoClear = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.gammaFactor = 2.2;

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.noKeys = true;
		controls.enableDamping = true;
		controls.minPolarAngle = 0.8;
		controls.maxPolarAngle = 2.4;
		controls.dampingFactor = 0.07;
    controls.rotateSpeed = 0.5;
    controls.update();

    var loader = new GLTFLoader();
    var model;
    loader.load('./eames.glb', function ( gltf ) {
      model = gltf.scene;
      scene.add(model);
    }, undefined, function ( error ) {
      console.error( error );
    });

    var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
      hemiLight.position.set(0, 100, 0);
      scene.add(hemiLight);

    var dirLight = new THREE.DirectionalLight( 0xffffff, .1 );
      dirLight.position.set(0, 1, 0);
      scene.add(dirLight);

    this.scene = scene;
    this.controls = controls;
    this.camera = camera;
    this.renderer = renderer;
    this.model = model;
    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.renderScene()
    this.controls.update()
    this.frameId = window.requestAnimationFrame(this.animate)
    this.checkForScroll();
    TWEEN.update();
  }

  checkForScroll() {
    const { animating, current } = this.state;
    const { section } = this.props;
    if (section !== current && !animating) {
      this.updateTween(section);
      this.setState({ current: section })
    }
  }

  updateTween(section) {
    const { animating } = this.state;
      if (section === 0) {
        var targetPosition = new THREE.Vector3(70, 40, 100 );
        var duration = 2000;
        if (this.model) console.log(this.model)
        this.tweenCamera( targetPosition, duration );
      } else if (section === 1) {
        var targetPosition = new THREE.Vector3( 70, 30, 75 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      } else if (section === 2) {
        var targetPosition = new THREE.Vector3( 70, 15, 0 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      } else if (section === 3) {
        var targetPosition = new THREE.Vector3( 70, -30, -10 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      } else if (section === 4) {
        var targetPosition = new THREE.Vector3( 0, 0, -75 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      } else if (section === 5) {
        var targetPosition = new THREE.Vector3( -70, 30, -50 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      } else if (section === 6) {
        var targetPosition = new THREE.Vector3( -70, 30, 25 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      } else if (section === 7) {
        var targetPosition = new THREE.Vector3( 70, 35, 100 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      } else if (section === 8) {
        var targetPosition = new THREE.Vector3( 70, 40, 100 );
        var duration = 1000;
        this.tweenCamera( targetPosition, duration );
      }
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  tweenCamera( targetPosition, duration ) {
    const isAnimating = () => {
      this.setState({ animating: !this.state.animating})
    }
    isAnimating();
    this.controls.enabled = false;
    let c = this.camera;
    let t = this.controls;
    var position = new THREE.Vector3().copy( c.position );
    var tween = new TWEEN.Tween( position )
      .to( targetPosition, duration )
      .easing( TWEEN.Easing.Quadratic.InOut )
      .onUpdate( function () {
        c.position.copy( position );
        c.lookAt( t.target );
      } )
      .onComplete( function () {
        c.position.copy( targetPosition );
        c.lookAt( t.target );
        t.enabled = true;
        isAnimating();
      } )
      .start();
  }

  render() {
    const { width, height, scroll } = this.props;
    return (
      <OuterShell>
        <InnerShell>
          <div
            style={{ width: `${width}px`, height: `${height}px` }}
            ref={(mount) => { this.mount = mount }}
          />
        </InnerShell>
      </OuterShell>
    )
  }
}

export default SceneClass