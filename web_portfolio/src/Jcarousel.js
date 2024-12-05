import React from "react";
import Carousel from "react-material-ui-carousel";


export default function CarouselCard() {
  
  const images1 = [
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732818437/stem1.png",
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732818451/stem2.png"

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