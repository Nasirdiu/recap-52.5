import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Slider = () => {
  return (
    <CardGroup className="mt-3">
      <Card>
        <Card.Img variant="top" src="https://th.wallhaven.cc/lg/p2/p2r9pp.jpg" />
        <Card.Body>
          <Card.Title>BMW</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://a-static.besthdwallpaper.com/lamborghini-huracan-wallpaper-2880x1800-1391_8.jpg" />
        <Card.Body>
          <Card.Title>Cadillac</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://image.winudf.com/v2/image/aWQud2FsbHBhcGVyLmZlcnJhcmkuY2Fyd2FsbHBhcGVyLmZlcnJhcml3YWxscGFwZXI5X3NjcmVlbl80XzE1MjI2NjA4ODVfMDU1/screen-4.jpg?fakeurl=1&type=.jpg" />
        <Card.Body>
          <Card.Title>Aston Martin</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Slider;
