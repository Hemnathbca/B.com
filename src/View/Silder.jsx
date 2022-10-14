import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Image } from '../assets/image/assets';



const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom>
        {Image.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.marriage} />
            </div>
            
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow