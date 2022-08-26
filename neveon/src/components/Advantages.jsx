import React, { useState } from "react";
import { Card, Container, Row } from "react-bootstrap";

import qualityImg from "../assets/quality.png";
import deliveryImg from "../assets/delivery.png";
import reportImg from "../assets/report.png";
import "../styles/Item.css";

export const Advantages = () => {
  const [advantagesInfo] = useState([
    {
      id: 1,
      img: qualityImg,
      title: "Якість",
      description:
        "Зроблені на базі інтернет-аналітики висновки висвітлюють надзвичайно цікаві особливості картини загалом.",
    },
    {
      id: 2,
      img: deliveryImg,
      title: "Доставка",
      description:
        "Як неодноразово згадано, ретельні дослідження конкурентів може бути своєчасно верифіковані. У своєму прагненні покращити користувальницький досвід ми втрачаємо",
    },
    {
      id: 3,
      img: reportImg,
      title: "Грамотна консультація",
      description:
        "Сформована структура організації є якісно новим щаблем своєчасного виконання надзавдання.Перспективне планування надає широкі можливості для першочергових вимог",
    },
  ]);
  return (
    <Container>
      <h1>Чому вибирають саме нас?</h1>
      <Row className="d-flex  justify-content-around">
        {advantagesInfo.map((item) => {
          return (
            <Card key={item.id} className="align-items-center itemCard">
              <Card.Img
                variant="top"
                src={item.img}
                className="advantagesImg"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      <h1>CEO</h1>
      <p style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Так само обраний нами інноваційний шлях
        відіграє важливу роль у формуванні поставлених суспільством завдань. У
        своєму прагненні підвищити якість життя вони забувають, що постійне
        кількісне зростання і сфера нашої активності відіграє визначальне
        значення для моделі розвитку! Високий рівень залучення представників
        цільової аудиторії є чітким доказом простого факту: базовий вектор
        розвитку є цікавим експериментом перевірки системи масової участі.
        Насамперед глибокий рівень занурення виявляє термінову потребу
        відповідних умов активізації. Кожен із нас розуміє очевидну річ: сучасна
        методологія розробки створює необхідність включення до виробничого плану
        цілої низки позачергових заходів з урахуванням комплексу системи масової
        участі.
      </p>
    </Container>
  );
};
