// Custom hook to help output images
import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  // Create local piece of state:
  const [docs, setDocs] = useState([]);

  // Communicate w/ database via useEffect hook:
  useEffect(() => {

    const unsub = projectFirestore.collection(collection)
      // sort/order documents by creation and in descending order:
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        // Create an array of documents that will be returned:
        let documents = [];
        // Cycle through docs currently inside of database 
        snap.forEach((doc) => {
          // Push data from document to documents array for stroage purposes
          documents.push({ ...doc.data(), doc: doc.id });
        });
        // Update documents:
        setDocs(documents);
      });

    // Helper function to invoke unsub function:
    return () => unsub();

  }, [collection]);

  return { docs };
};

export default useFirestore;
