import * as Three from 'three';
import React, { useEffect, useRef, useState } from 'react';
import ModelVideo from './ModelVideo';
import gsap from 'gsap';
import { yellowImg } from '../utils';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { models, sizes } from '../constants';
import { useGSAP } from '@gsap/react'; // Ensure this is imported correctly
import { animateWithGsapTimeline } from '../utils/animations';

const Model = () => {
  const [Size, setSize] = useState('small');
  const [Model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8f8a81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  });

  const cameraControlSmall = useRef();
  const CamaraControlLarge = useRef();

  const small = useRef(new Three.Group());
  const Large = useRef(new Three.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const Tl = gsap.timeline();

  useEffect(() => {
    if(Size === 'large'){
      animateWithGsapTimeline(Tl,small , smallRotation , 
        '#view1' , '#view2' , 
        {
        transform: 'translateX(-100%)' , 
        duration: 2
      })
    
    }
    if(Size === 'small'){
      animateWithGsapTimeline(Tl,Large , largeRotation ,
         '#view2' , '#view1' , 
        {
        transform: 'translateX(0)' , 
        duration: 2
      })
    }
  },[Size])

  // GSAP animation
  useGSAP(() => {
    gsap.to('#heading', {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a Closer Look.
        </h1>

        {/* Main Container */}
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            {/* Canvas for Three.js content */}
            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
              }}
              eventSource={document.getElementById('root')}
            >
              {/* Three.js compatible objects only */}
              <View.Port />
              {/* You can add your Three.js objects, such as <mesh> or other 3D elements here */}
            </Canvas>

            {/* ModelVideo Components */}
            <ModelVideo
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={Model}
              size={Size}
            />
            <ModelVideo
              index={2}
              groupRef={Large}
              gsapType="view2"
              controlRef={CamaraControlLarge}
              setRotationState={setSmallRotation}
              item={Model}
              size={Size}
            />
          </div>

          {/* HTML Content - outside the Canvas */}
          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{Model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className='size-btn-container'>
                {sizes.map(({label , value}) => (
                  <span key={label} className='size-btn'
                  style={ {backgroundColor: Size === value ? 'white' : 'transparent' , color: Size === value ? 'black' : 'white'}}
                  onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Model;
