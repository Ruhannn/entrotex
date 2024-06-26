import SwipeCarousel from "../Components/Hero";
import ProductHero from "../Components/Products/slider/ProductHero";
export default function Home() {
  return (
    <div>
      <SwipeCarousel />
      <video autoPlay muted controls={false}>
        <source
          src="https://res.cloudinary.com/ddcjzcoys/video/upload/v1713972221/m30shortocn0oqettfcg.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <ProductHero />
    </div>
  );
}
