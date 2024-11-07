import { OrbitControls, View } from '@react-three/drei';
import React, { Suspense } from 'react';
import Lights from './Lights';
import * as THREE from 'three';
import IPhone from './IPhone';
import Loader from './Loader';

const ModelVideo = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={2.5} />
      <perspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
        <Suspense
          fallback={ <Loader />
            // <mesh>
            //   <sphereGeometry args={[0.5, 16, 16]} />
            //   <meshStandardMaterial color="lightgray" />
            // </mesh>
          }
        >
          <IPhone
            scale={index === 1 ? [25, 25, 25] : [30,30,30]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelVideo;
