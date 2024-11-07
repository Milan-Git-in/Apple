import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animatewithGsap } from '../utils/animations'

const Chip = () => {

    const videoRef = useRef();

    useGSAP(() => {
    gsap.from('#chip', {
        scrollTrigger:{
            trigger:'#chip',
            start:'20% bottom'
            
        },
        opacity:0,
        scale:2,
        duration: 2,
        ease: 'power2.inOut'
    })

    animatewithGsap('.g_fadeIn', {
        opacity:1,
        y:0,
        duration:1,
        ease:'power2.inOut'
    })

    },[]);

  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <div id='chip' className='flex-center w-full my-20'>
                <img src={chipImg} alt="Chip" width={180} height={180} />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='hiw-title'>
                    A17 Pro Chip. <br/>
                    A Monster win for Gaming
                </h2>
                <p className='hiw-subtitle'>
                    It's here. The biggest redesign in the History of Apple GPUs.
                </p>
            </div>
            <div className='mt-10 md:mt-20 mb-14'>
                <div className='relative h-full flex-center'>
                    <div className='overflow-hidden'>
                        <img src={frameImg} alt="Frame"  className='bg-transparent relative z-10'/>
                    </div>
                    <div className='hiw-video'>
                            <video 
                            ref={videoRef}
                            loop
                            preload='none'
                            playsInline
                            autoPlay
                            muted
                            className='pointer-events-none'
                            src={frameVideo} typeof='video/mp4'></video>
                        </div>
                </div>
                <p className='text-gray mt-3 text-center font-semibold'> Honkai: Star Rail</p>
                </div>
                <div className="hiw-text-container">
                            <div className="flex flex-1 justify-center flex-col">
                                <p className="hiw-text g_fadeIn">
                                    A17 Pro is an Entirely new Class of Iphone chip that delivers our {" "}
                                    <span className="text-white">
                                        Best Graphic Performance By far 
                                    </span>{" "}
                                   
                                </p>
                            
                          
                                <p className="hiw-text g_fadeIn">
                                    Mobile{" "}
                                    <span className="text-white">
                                         Games will look and feel so Immersive
                                    </span>{" "}
                                    With Increadibly Detailed enviorments and characters.
                                </p>
                        
                                </div>
                        <div
                        className='flex-1 flex justify-center flex-col g_fadeIn'
                        >

                            <p className='hiw-text'>New</p>
                            <p className='hiw-bigtext text-white'>Pro-class GPU</p>
                            <p className='hiw-text'>with 6 Cores</p>
                        </div>
            </div>
            </div>
    </section>
  )
}

export default Chip