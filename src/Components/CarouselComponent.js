import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselComponent = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAAkvkLy8FevuRZtO6fHxHG_iZzOqUaDktA&s',
    'https://www.pockethrms.com/wp-content/uploads/2022/01/Happy-Workforce.jpg',
    'https://media.licdn.com/dms/image/D4D12AQGMiCuuM8zbGA/article-cover_image-shrink_600_2000/0/1688637602531?e=2147483647&v=beta&t=sYB6czXb1_acnEIgVGDGqmRdg7Wg1B4_LTkPT1FEDHU',
    'https://via.placeholder.com/800x300?text=Image+4',
    'https://via.placeholder.com/800x300?text=Image+5',
  ];

  return (
    <div className="carousel-container mx-auto my-1">
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {images.map((url, index) => (
          <div key={index} className="carousel-slide">
            <img src={url} alt={`carousel-image-${index}`} className="w-1/2 h-40 object-cover" />
            <p className="legend">{`Slide ${index + 1}`}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
