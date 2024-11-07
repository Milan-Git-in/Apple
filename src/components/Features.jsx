import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animatewithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
    const videoRef = useRef();

    useGSAP(() => {
        gsap.to("#exploreVideo", {
            scrollTrigger: {
                trigger: "#exploreVideo",
                toggleActions: "play pause reverse restart",
                start: "-10% bottom",
            },
            onComplete: () => {
                if (videoRef.current) {
                    videoRef.current.play();
                }
            },
        });

        animatewithGsap("#feature_title", { y: 0, opacity: 1 });
        animatewithGsap(".g_grow", { scale: 1, opacity: 1 });
        animatewithGsap(".g_text", {
            y: 0,
            opacity: 1,
            ease: "power2.inOut",
            duration: 1,
        });
    }, []);

    return (
        <section className="h-full common-padding bg-zinc overflow-hidden relative">
            <div className="screen-max-width">
                <div className="mb-12 w-full">
                    <h1 id="feature_title" className="section-heading">
                        Explore the Full Story.
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center overflow-hidden">
                    <div className="mt-32 mb-24 pl-24">
                        <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
                        <h2 className="text-5xl lg:text-7xl font-semibold">
                            Forged In titanium.
                        </h2>
                    </div>
                    <div className="flex-center flex-col sm:px-10">
                        {/* Video Section */}
                        <div className="relative h-[50vh] w-full flex items-center">
                            <video
                                src={exploreVideo}
                                type="video/mp4"
                                playsInline
                                id="exploreVideo"
                                className="w-full h-full object-cover object-center"
                                muted
                                autoPlay
                                preload="none"
                                ref={videoRef}
                            ></video>
                        </div>

                        {/* Images Section */}
                        <div className="flex flex-col sm:flex-row w-full relative">
                            <div className="w-full sm:w-1/2 h-[50vh] overflow-hidden">
                                <img
                                    src={explore1Img}
                                    alt="Titanium"
                                    className="w-full h-full object-cover g_grow"
                                />
                            </div>
                            <div className="w-full sm:w-1/2 h-[50vh] overflow-hidden">
                                <img
                                    src={explore2Img}
                                    alt="Titanium2"
                                    className="w-full h-full object-cover g_grow"
                                />
                            </div>
                        </div>

                        {/* Text Section */}
                        <div className="feature-text-container mt-8">
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    iPhone 15 Pro is{" "}
                                    <span className="text-white">
                                        The first iPhone to feature an Aerospace-grade titanium
                                        design
                                    </span>{" "}
                                    using the same alloy that spacecrafts use for missions to Mars.
                                </p>
                            </div>
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    Titanium has one of the best strength-to-weight ratios of any
                                    metal, making these our{" "}
                                    <span className="text-white">
                                        lightest Pro models ever.
                                    </span>{" "}
                                    You'll notice the difference the moment you pick one up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
