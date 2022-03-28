import React from "react";
import { Carousel } from "react-bootstrap";

const Card = () => {
  return (
    <div className=" mt-3">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 fluid"
            src="https://wallpapersmug.com/download/2560x1080/59713a/convertible-car-bentley-mulliner-bacalar-2020.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.hdqwalls.com/download/ford-mustang-shelby-gt500-2-ad-2560x1080.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://avatars.mds.yandex.net/i?id=d7d3576200a43b37af0f6539feef108c-5873252-images-thumbs&n=13&exp=1"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Card;
