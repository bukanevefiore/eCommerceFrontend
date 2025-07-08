import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "./ProductCard";

export default function Carousel({ products }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1.2 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.2 },
        1280: { slidesPerView: 4 },
      }}
    >
      {products.map((p) => (
        <SwiperSlide key={p.name}>
          <ProductCard product={p} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
