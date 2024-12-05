import React from "react";
import Carousel from "react-material-ui-carousel";


export default function CarouselCard() {
  
  const images1 = [
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732814345/sgc1.png",
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732815694/sgc2.png",
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732816066/sgc3.png"
    
  ];

  return ( 
    <div>
        <Carousel className="ps">
              {images1.map((image, index) => (
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