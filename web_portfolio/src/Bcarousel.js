import React from "react";
import Carousel from "react-material-ui-carousel";


export default function CarouselCard() {
  
  const images1 = [
    "https://i.postimg.cc/50b4vJ14/bazar1.png",
    "https://i.postimg.cc/3J4TkNpj/bazar2.png",
    "https://i.postimg.cc/SNBpC47B/bazar3.png"
 
    
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