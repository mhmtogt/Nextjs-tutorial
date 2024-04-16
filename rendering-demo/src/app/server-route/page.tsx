import { ServerSideFunction } from '@/utils/server-utils'
import React from 'react';
import Slider from 'react-slick';

export default function ServerRoutePage() {

    const settings = {
        dots: true,
      };
      return (
        <div className="image-slider-container">
          <Slider {...settings}>
            <div>
              <img src="https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek.jpg" />
            </div>
            <div>
              <img src="https://i.ytimg.com/vi/vD1JR9jjXFE/maxresdefault.jpg" />
            </div>
            <div>
              <img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg" />
            </div>
            <div>
              <img src="https://mingitav.org.tr/upload/galeri/germany_nature_wide_1366x768.jpg" />
            </div>
          </Slider>
        </div>
      );
}
