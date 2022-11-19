import insta from "..//..//images/Group 22.png";
import whats from "..//..//images/Group 23.png";
import telega from "..//..//images/Group 13.png";
import brand from "..//..//images/IMG_1024 1.png";
import logo from "..//..//images/Rectangle 83.png";
import resume from "..//..//images/IMG_4420 1.png";

import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React, { useState, useRef } from "react";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import {
  AboutSection,
  ContainerHeader,
  List,
  Item,
  Brand,
  Footer,
  FooterSection,
  FooterSectionItem,
  FooterSectionSocialItem,
  FooterSectionSocialList,
  FooterSectionSocialLogo,
  Hero,
  HeroTitle,
  HeroLogo,
  HeroList,
  HeroItems,
  HeroItem,
  HeroText,
  ResumeLevel,
  ResumeLevelImg,
  ResumeLevelRight,
  ResumeLevelTitle,
  ResumeLevelDescription,
  ResumeLevelText,
  Philosophi,
  PhilosophiTitle,
  PhilosophiText,
  Feedback,
  FeedbackBtn,
  FeedbackTitle,
} from "./About.styled";
import { Scroll } from "../../components/main/main.styled";

export default function About() {
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
    <AboutSection>
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
      <Hero>
        <HeroTitle>История создания мастерской</HeroTitle>
        <HeroTitle>NIKASON BRAND</HeroTitle>
        <HeroLogo src={logo}></HeroLogo>
        <HeroList>
          <HeroItems>
            <HeroItem>+10 лет</HeroItem>
            <HeroText>На рынке по производству мебели</HeroText>
          </HeroItems>

          <HeroItems>
            <HeroItem>+1500</HeroItem>
            <HeroText>Изготовлено мебели</HeroText>
          </HeroItems>

          <HeroItems>
            <HeroItem>120 лет</HeroItem>
            <HeroText>Самой старинной мебели для реставрации </HeroText>
          </HeroItems>
        </HeroList>
      </Hero>

      <ResumeLevel>
        <ResumeLevelImg src={resume}></ResumeLevelImg>
        <ResumeLevelRight>
          <ResumeLevelTitle>Никита Матчитов</ResumeLevelTitle>
          <ResumeLevelDescription>Основатель мастерской</ResumeLevelDescription>
          <ResumeLevelText>
            С детства я был окружен творческими людьми, мой дедушка был
            строителем и мастером по дереву. Спустя много лет и мне передалась
            его любовь к дереву - в свободное время мастерил для себя небольшие
            изделия из древесины. <br />
            <br />
            Более десяти лет назад построил двухэтажный гараж, на втором этаже
            расположилась наша мастерская. Начинал производство практически “с
            нуля”, с каждой зарплаты понемногу откладывал на покупку
            инстурментов и станков. <br />
            <br />
            Постепенно начали появляться первые заказы. Несколько лет назад мы с
            супругой решили еще заняться ремонтом и реставрацией мебели. Эту
            идею предложили сами клиенты, поскольку периодически приходили с
            таким запросом. В основном, реставрацией занимается супруга
            Саргылана. Мы с ней одна сплоченная, дружная и отличная команда.{" "}
          </ResumeLevelText>
        </ResumeLevelRight>
      </ResumeLevel>
      <Philosophi>
        <PhilosophiTitle>Философия мастерской NIKASON</PhilosophiTitle>
        <PhilosophiText>
          Создавать что-то по-настоящему ценное и уникальное. <br />
          Дарить радость и уют в каждый дом
        </PhilosophiText>
      </Philosophi>
      <Feedback>
        <FeedbackTitle>Оставьте заявку и мы с вами свяжемся</FeedbackTitle>
        <FeedbackBtn onClick={handleShow}>Оставить заявку</FeedbackBtn>

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
      </Feedback>
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
    </AboutSection>
  );
}
