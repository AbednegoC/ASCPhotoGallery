import React, { useState } from "react";
import ProgressBar from './ProgressBar';

const FormUpload = () => {
    // Store file in local piece of state: file is null to begin with since we haven't selected a file.
    const [file, setFile] = useState(null) 
    // Store file error in local piece of state:
    const [error, setError] = useState(null)
    // Specify the allowed image/file types:
    const fileTypes = ['image/png', 'image/jpeg'];

    // Handle form upload event:
    const changeHandler = (e) => {
        // Grab Uploaded File:
        let selected = e.target.files[0];
        
        // Check whether a valid file has been selected or not to update the file state:
        if(selected && fileTypes.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError("Error: Please select a valid image file (.png or .jpeg)");

        }
        console.log(selected);
    }
    
  return (
    // Simple JSX to create a file upload form:
    <form>
        <label> 
            <input type="file" onChange={changeHandler} /> 
            <span>+</span> 
        </label>

      {/* render JSX if the selected file is valid or not (like a boolean): */}
      <div className='output'>
          { error && <div className='error'>{ error }</div> }
          { file && <div>{file.name}</div> }
          { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  );
};

export default FormUpload;
