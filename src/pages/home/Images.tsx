import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Images.module.css";
import global from "../../components/Global.module.css";
import imageOne from "../../images/products/4294.png";
import imageTwo from "../../images/products/4295.png";
import imageThree from "../../images/products/4296.png";
import imageFour from "../../images/products/4297.png";
import imageFive from "../../images/products/4299.png";
import imageSix from "../../images/products/4298.png";
import imageSeven from "../../images/products/4302.png";
import imageEight from "../../images/products/4300.png";
import imageNine from "../../images/products/4301.png";

const images = [
  {
    src: imageOne,
    title: "ZYN Cool Mint Mini - 6mg",
    description: "A cooling taste of menthol with hints of peppermint",
  },
  {
    src: imageTwo,
    title: "ZYN Citrus Mini - 6mg",
    description: "A taste of citrus fruits with hints of lemongrass",
  },
  {
    src: imageThree,
    title: "ZYN Espressino Mini - 6mg",
    description: "A taste of freshly roasted coffee with hints of cocoa and caramel",
  },
  {
    src: imageFour,
    title: "ZYN Cool Mint 9.5mg - Slim",
    description: "An intense cooling taste of fresh peppermint",
  },
  {
    src: imageFive,
    title: "ZYN Icy Mint 9.5mg - Slim",
    description: "A cooling taste of eucalyptus and menthol",
  },
  {
    src: imageSix,
    title: "ZYN Cool Mint 11mg - Slim",
    description: "An intense cooling taste of fresh peppermint",
  },
  {
    src: imageSeven,
    title: "ZYN Chili Guava 11mg - Slim",
    description: "A fruity taste of guava and chili",
  },
  {
    src: imageEight,
    title: "ZYN Icy Mint 12.5mg - Slim",
    description: "A cooling taste of eucalyptus and menthol",
  },
  {
    src: imageNine,
    title: "ZYN Icy Blackcurrant 12.5mg - Slim",
    description: "A cooling taste of menthol topped with the flavour of dark berries",
  },
];

function Images() {
  const [currentIndex, setCurrentIndex] = useState(4);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getTransformValue = (index: number) => {

	if (screenWidth > 960) {
		const offset = (window.innerWidth)/2 - 320/2; 
		const translateX = -currentIndex * 320 + offset;
		return `translateX(${translateX}px)`;
	} else {
		const offset = (window.innerWidth)/2 - 180/2; 
		const translateX = -currentIndex * 180 + offset;
		return `translateX(${translateX}px)`;
	}
  };

  return (
      <div className={styles.container}>
        <div className={styles.carousel}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.item} ${index === currentIndex ? styles.itemSelected : ""}`}
              style={{ transform: getTransformValue(index) }}
              onClick={() => handleImageClick(index)}
            >
              <div className={styles.imgContainer}>
                <img src={image.src} alt={image.title} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.itemInfo}>
          <h3 className={styles.itemTitle}>{images[currentIndex].title}</h3>
          <p className={styles.itemP}>{images[currentIndex].description}</p>
        </div>
      </div>
  );
}

export default Images;
