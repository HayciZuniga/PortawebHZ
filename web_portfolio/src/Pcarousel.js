import React from "react";
import Carousel from "react-material-ui-carousel";


export default function CarouselCard() {
  const images = [
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732812726/ps1.png",
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732813147/ps2.png",
    "https://res.cloudinary.com/domx1jjs0/image/upload/v1732813161/ps3.png",
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