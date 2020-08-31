import React from 'react'
import { motion } from 'framer-motion';

const ImgModal = ({ currImage, setCurrImage }) => {

    // Toggle on/off backdrop img w/ the event target object:
    const toggleImg = (e) => {
        if (e.target.classList.contains('backdrop')){
            setCurrImage(null);
        }
    }
    return (
        <motion.div className="backdrop" onClick={toggleImg}
            initial={{opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={currImage} alt='modal img'
                initial={{y: '-100vh'}}
                animate={{y: 0}}
                transition={{ delay: 0.1 }}
            />
        </motion.div>
            
    )
}

export default ImgModal
