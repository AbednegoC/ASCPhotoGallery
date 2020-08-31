import React from 'react'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const Grid = ({ setCurrImage}) => {
    // Access data from firestore database to cycle through img urls to render imgaes:
    const { docs } = useFirestore('images');
    // console.log(docs);

    return (
        <div className="img-grid">
           { docs && docs.map((doc, i) => (
               <motion.div className='img-wrap' key={i}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setCurrImage(doc.url)}
                >
                   <motion.img src={doc.url} alt='student imgage'
                   initial={{ opacity: 0 }} 
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }} />
               </motion.div>
           )) }
        </div>
    )
}

export default Grid
