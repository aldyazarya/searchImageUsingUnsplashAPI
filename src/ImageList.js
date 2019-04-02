import React from 'react'

import './css/ImageList.css'

const ImageList = (prop) => {
    
    console.log(prop);
    
    const arrImages = prop.images.map((img) =>{
        return (
            <div className="show-image d-flex justify-content-center align-content-center" align="center">
                <img className="m-3" src={img.urls.regular} style={{maxWidth: "712px"}} alt="hmm.."/>
            </div>
        )
    })

    return (
        <div>
            {arrImages}
        </div>
    )
}

export default ImageList;