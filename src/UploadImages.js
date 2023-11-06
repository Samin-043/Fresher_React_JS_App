import React, { useState } from 'react';
import './UploadImagesStyles.css'


const ImageUpload = () => {

    // browse image from device works here.....
    function dragAndDrop(event) {
        var fileName = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("preview");
        var previewImg = document.createElement("img");
        previewImg.setAttribute("src", fileName);
        preview.innerHTML = "";
        preview.appendChild(previewImg);
    }

    // upload image file in drag
    function drag() {
        document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
    }

    // upload image file in drop
    function drop() {
        document.getElementById('uploadFile').parentNode.className = 'dragBox';
    }


    return (
        <div>
            {/* show image div */}
            <div id="preview"></div>

            {/* impage upload section */}
            <div className="uploadOuter">
                <span className="dragBox" >
                    Darg and Drop image here
                    <input className='inputFeildCustomize' type="file" onChange={dragAndDrop} ondragover={drag} ondrop={drop} id="uploadFile" />
                </span>
            </div>
        </div>
    )
};



export default ImageUpload;
