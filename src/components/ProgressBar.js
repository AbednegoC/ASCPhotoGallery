import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile}) => {

    // url and progress once the upload is complete from useStorage hook:
    const {url, progress} = useStorage(file);

    // Fire a function for when the value of url changes:
    useEffect(() => {
        if(url){
            // Remove progress bar since url is successfully uploaded:
            setFile(null); 
        }
    }, [url, setFile])

    return (
        <motion.div className='progress-bar'
            initial={{ width: 0}}
            animate={{ width: progress + '%' }}
            transition={{ delay: 0.1 }}>
        </motion.div>
    )
}

export default ProgressBar
