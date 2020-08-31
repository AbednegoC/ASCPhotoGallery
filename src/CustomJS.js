import React from 'react';
import Particles from 'react-particles-js';

const CustomJS = () => {
   
    return (
        <div className='particles-js'>
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 20,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                        color: {
                            value: '#51c1e9',
                        },
                        shape: {
                            type: 'circle'
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        lineLinked: {
                            enable: false,
                            distance: 100,
                            color: '#51c1e9',
                            opacity: 1,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: 'right',
                            out_mode: 'out',
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        }

                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse"
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            }
                        },
                        modes:{
                            repulse: {
                                distance: 125,
                                duration: 0.5
                            }
                        }
                    }
                }}
            />
        </div>


    )
}

export default CustomJS
