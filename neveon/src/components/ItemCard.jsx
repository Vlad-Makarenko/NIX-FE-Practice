import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import cardImg1 from "../assets/item1.png";
import cardImg2 from "../assets/item2.png";
import cardImg3 from "../assets/item3.png";
import cardImg4 from "../assets/item4.png";
import cardImg5 from "../assets/item5.png";
import cardImg6 from "../assets/item6.png";
import "../styles/Item.css";

export const ItemCard = ({ item }) => {
  const [cardImg, setCardImg] = useState(cardImg1);
  const history = useNavigate();

  useEffect(() => {
    switch (item.id) {
      case 1:
        setCardImg(cardImg1);
        break;
      case 2:
        setCardImg(cardImg2);
        break;
      case 3:
        setCardImg(cardImg3);
        break;
      case 4:
        setCardImg(cardImg4);
        break;
      case 5:
        setCardImg(cardImg5);
        break;
      case 6:
        setCardImg(cardImg6);
        break;
      default:
        break;
    }
  }, [item.id]);

  const clickItemHandler = () => {
    history(`/category/${item.id}`);
  };

  return (
    <Card className="d-flex flex-column justify-content-center itemCard">
      <Card.Img
        onClick={clickItemHandler}
        className="itemLink"
        variant="top"
        src={cardImg}
      />
      <Card.Body>
        <Card.Title onClick={clickItemHandler} className="itemLink">
          {item.name}
        </Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Title>Ціна від {item.price}</Card.Title>
        <Button variant={"outline-dark"}>Замовити</Button>
      </Card.Body>
    </Card>
  );
};
