// Custom hook to handle file uploads and firebase storage:
import {useState, useEffect} from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config'

// Handle file uploads and return useful values:
const useStorage = (file) => {
    // Progress of file upload:
    const [progress, setProgress] = useState(0)

    // Any errors from file upload:
    const [error, setError] = useState(null)

    // Image url after file is uploaded to storage:
    const [url, setUrl] = useState(null)


    useEffect(() => {
        // Reference to where file is uploaded:
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection('images')

        // Take file and put in the reference; however, this is async so a listener is attached (i.e '.on')
        storageRef.put(file).on('state_changed', (snap) => {
            // Calculate progress of upload via. 'snap(shots)' in time of upload:
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            // a simple num b/w (0 - 100)
            setProgress(percentage);
        }, (err) => {
            setError(err)
        }, async () => {
            // Get url of image that has just been uploaded:
            const url = await storageRef.getDownloadURL();
            const createdAt = timeStamp();
            setUrl(url)
            collectionRef.add({ url, createdAt })
        })

        // Control the useEffect() logic whenever the dependency below changes (aka whenever we upload a new file)
    }, [file])
    
    return { progress, url, error }
}

export default useStorage;