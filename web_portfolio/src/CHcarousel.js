import React from "react";
import Carousel from "react-material-ui-carousel";


export default function CarouselCard() {
  const images = [
    "https://i.postimg.cc/fTRYh4G0/juri1.png",
    "https://i.postimg.cc/8PXMpKGX/juri2.png",
    "https://i.postimg.cc/3RhDSzjN/juri3.png"
  ];

  return ( 
    <div>
        <Carousel className="ps">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "290px", objectFit: "cover" }}
                />
              ))}
            </Carousel>

    </div>

            
  );
}