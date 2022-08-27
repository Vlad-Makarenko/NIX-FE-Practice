import React from "react";
import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { Description } from "./Description";

import Img from "../assets/desc.png";

export const ItemDescription = () => {
  return (
    <Container className="mt-4">
      <Tabs
        defaultActiveKey="description"
        id="uncontrolled-tab-example"
        className="mb-3"
        style={{ fontSize: "24px", fontWeight: "600" }}
      >
        <Tab eventKey="description" title="Опис">
          <Row style={{ textAlign: "justify" }}>
            <p>
              Також як підвищення рівня громадянської свідомості спричиняє
              процес впровадження та модернізації економічної доцільності
              прийнятих рішень. Кожен з нас розуміє очевидну річ: економічний
              порядок денний відіграє визначальне значення для відповідних умов
              активізації. Як прийнято вважати, акціонери найбільших компаній,
              які є яскравим прикладом континентально-європейського типу
              політичної культури, будуть піддані цілій серії незалежних
              досліджень. Ретельні дослідження конкурентів віддані
              соціально-демократичній анафемі. Враховуючи ключові сценарії
              поведінки, межа навчання кадрів створює необхідність включення у
              виробничий план цілого ряду позачергових заходів з урахуванням
              комплексу експериментів, що вражають за своєю масштабністю та
              грандіозністю. Лише дії представників опозиції, незалежно від
              їхнього рівня, мають бути перетворені на посміховисько, хоча саме
              їхнє існування приносить безперечну користь суспільству.
            </p>
          </Row>
          <Row className="d-flex justify-content-center mb-4 mt-4">
            <img style={{ width: "50%" }} src={Img} alt="img" />
          </Row>
          <Row style={{ textAlign: "justify" }}>
            <p>
              Високий рівень залучення представників цільової аудиторії є чітким
              доказом простого факту: подальший розвиток різних форм діяльності
              вимагає від нас аналізу поетапного та послідовного розвитку
              суспільства. Ясність нашої позиції очевидна: обраний нами
              інноваційний шлях дозволяє виконати важливі завдання розробки
              кластеризації зусиль. Насамперед обраний нами інноваційний шлях
              сприяє підвищенню якості експериментів, що вражають за своєю
              масштабністю та грандіозністю. Слід зазначити, що теорія дозволяє
              виконати важливі завдання з розробки першочергових вимог.
              Значимість цих проблем настільки очевидна, що
              соціально-економічний розвиток у своєму класичному уявленні
              допускає впровадження інноваційних методів управління процесами.
              Економічний порядок денний безпосередньо залежить від розподілу
              внутрішніх резервів і ресурсів. До речі, акціонери найбільших
              компаній, ініційовані виключно синтетично, функціонально рознесені
              на незалежні елементи.
            </p>
            <p>
              Слід зазначити, що високотехнологічна концепція суспільного устрою
              не залишає шансу моделі розвитку. Загалом, звичайно, реалізація
              намічених планових завдань не залишає шансу на інноваційні методи
              управління процесами. Явні ознаки перемоги інституціоналізації
              обмежені виключно мисленням. Таким чином, розуміння суті
              ресурсозберігаючих технологій сприяє підвищенню якості сприятливих
              перспектив.
            </p>
          </Row>
        </Tab>
        <Tab eventKey="options" title="Характеристики">
          <Description />
        </Tab>
      </Tabs>
    </Container>
  );
};
