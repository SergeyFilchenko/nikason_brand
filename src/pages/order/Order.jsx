import {
  Btn,
  Brand,
  ContainerHeader,
  Item,
  List,
  Footer,
  FooterSection,
  FooterSectionItem,
  FooterSectionSocialItem,
  FooterSectionSocialList,
  FooterSectionSocialLogo,
  Portfolio,
  PortfolioLogo,
  PortfolioTitle,
  Stages,
  StagesItems,
  StagesList,
  StagesListDigit,
  StagesListText,
  StagesTitle,
  SubTitle,
  Text,
  Title,
  WhyItems,
  WhyList,
  WhyText,
  WhyTitle,
  WhyTitles,
  WhyUs,
  SectionHero,
  ContainerHero,
  OrderSection,
} from "./Order.styled";

import insta from "..//..//images/Group 22.png";
import whats from "..//..//images/Group 23.png";
import telega from "..//..//images/Group 13.png";
import brand from "..//..//images/IMG_1024 1.png";
import { NavLink } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Scroll } from "../../components/main/main.styled";

export default function Order() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showFooter, setShowFooter] = useState(false);
  const target = useRef(null);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Terms of use – это основные публичные документы любого сайта, который
      предоставляет те или иные услуги. Для маркетплейсов, которым нужно
      предусмотреть множество аспектов предоставления услуг, эти публичные
      документы имеют особое значение. При подготовке таких документов не
      следует делать акцент на одном из них, так как оба документа имеют
      одинаковую значимость. Terms of use устанавливает правила пользования
      сайтом для пользователями.
    </Tooltip>
  );

  return (
    <OrderSection>
      <Scroll href="#">
        SCROLL <br />
        TO TOP
      </Scroll>
      <ContainerHeader>
        <List>
          <Item>
            <NavLink to="/master">Мастер-классы</NavLink>
          </Item>
          <Item>
            <NavLink to="/order">Мебель на заказ</NavLink>
          </Item>
        </List>
        <NavLink to="/">
          <Brand src={brand} alt="brand"></Brand>
        </NavLink>
        <List>
          <Item>
            <NavLink to="/" activeClassName="active">
              Главная
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/about">О нас</NavLink>
          </Item>
        </List>
      </ContainerHeader>

      <ContainerHero>
        <SectionHero>
          <Text>Воплотим вашу любую задумку в реальность</Text>
          <Title>Столярная мастерская </Title>
          <SubTitle>NIKASON BRAND</SubTitle>
          <Btn onClick={handleShow}>Заказать мебель</Btn>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Данные для связи</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Имя</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Например: Андрей"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Телефон</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="+38 067 565 0 565"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Ваши пожелания</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Например: Звонить с 9 до 18"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Закрыть
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Отправить
              </Button>
            </Modal.Footer>
          </Modal>
        </SectionHero>
      </ContainerHero>

      <WhyUs>
        <WhyTitle>Почему выбирают нас</WhyTitle>
        <WhyTitles>
          <WhyItems>
            <WhyList>Давно на рынке</WhyList>
            <WhyText>Опыт работы на рынке больше 10 лет</WhyText>
          </WhyItems>
          <WhyItems>
            <WhyList>Гарантия качества</WhyList>
            <WhyText>Предоставляем гарантию 12 месяцев на изделия </WhyText>
          </WhyItems>
          <WhyItems>
            <WhyList>Юридическая прозрачность</WhyList>
            <WhyText>Заключаем с каждым клиентом договор</WhyText>
          </WhyItems>
          <WhyItems>
            <WhyList>Экологичность</WhyList>
            <WhyText>
              Мебель из натуральной древесины, краски без токсичного состава
            </WhyText>
          </WhyItems>
          <WhyItems>
            <WhyList>Эксклюзивность</WhyList>
            <WhyText>
              Каждая мебель изготовлена по индивидуальному дизайну
            </WhyText>
          </WhyItems>
          <WhyItems>
            <WhyList>Долговечность</WhyList>
            <WhyText>
              Мебель из массива дерева прослужит даже вашим детям
            </WhyText>
          </WhyItems>
        </WhyTitles>
      </WhyUs>

      <Portfolio>
        <PortfolioTitle>Портфолио</PortfolioTitle>
        <PortfolioLogo></PortfolioLogo>
      </Portfolio>

      <Stages>
        <StagesTitle>Этапы производства</StagesTitle>
        <StagesItems>
          <StagesList>
            <StagesListDigit>1</StagesListDigit>
            <StagesListText>Встреча с клиентом</StagesListText>
          </StagesList>
          <StagesList>
            <StagesListDigit>2</StagesListDigit>
            <StagesListText>
              Подписание договора, внесение предоплаты
            </StagesListText>
          </StagesList>
          <StagesList>
            <StagesListDigit>3</StagesListDigit>
            <StagesListText>
              Выезд к клиенту на замер (при необходимости)
            </StagesListText>
          </StagesList>
          <StagesList>
            <StagesListDigit>4</StagesListDigit>
            <StagesListText>Составление проекта</StagesListText>
          </StagesList>
          <StagesList>
            <StagesListDigit>5</StagesListDigit>
            <StagesListText>
              Изготовление и согласование всех стадий с клиентом
            </StagesListText>
          </StagesList>
          <StagesList>
            <StagesListDigit>6</StagesListDigit>
            <StagesListText>
              Доставка и монтаж изделия (при необходимости)
            </StagesListText>
          </StagesList>
        </StagesItems>
      </Stages>

      <Footer>
        <FooterSection>
          <FooterSectionItem>
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Button variant="success">Договор оферты</Button>
            </OverlayTrigger>
          </FooterSectionItem>
          <FooterSectionItem>
            <Button ref={target} onClick={() => setShowFooter(!showFooter)}>
              Политика кофиденциальности
            </Button>
          </FooterSectionItem>
        </FooterSection>

        <FooterSection>
          <FooterSectionSocialList>
            <FooterSectionSocialItem>
              <a href="https://t.me/FSG_90">
                <FooterSectionSocialLogo
                  src={telega}
                  alt="telegram"
                ></FooterSectionSocialLogo>
              </a>
            </FooterSectionSocialItem>
            <FooterSectionSocialItem>
              <a href="https://www.instagram.com/seregafilchenko/">
                <FooterSectionSocialLogo
                  src={insta}
                  alt="instagram"
                ></FooterSectionSocialLogo>
              </a>
            </FooterSectionSocialItem>
            <FooterSectionSocialItem>
              <a href="https://vb.me/letsChatOnViber">
                <FooterSectionSocialLogo
                  src={whats}
                  alt="whatsapp"
                ></FooterSectionSocialLogo>
              </a>
            </FooterSectionSocialItem>
          </FooterSectionSocialList>
        </FooterSection>

        <Overlay target={target.current} show={showFooter} placement="top">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Copyright © bip.net.ua <br />
              Все права защищены
            </Tooltip>
          )}
        </Overlay>
      </Footer>
    </OrderSection>
  );
}
