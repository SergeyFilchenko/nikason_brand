import insta from "..//..//images/Group 22.png";
import whats from "..//..//images/Group 23.png";
import telega from "..//..//images/Group 13.png";
import brand from "..//..//images/IMG_1024 1.png";
import main from "..//..//images/main.png";
import d1 from "..//..//images/d1.png";
import d2 from "..//..//images/d2.png";
import d3 from "..//..//images/d3.png";
import d4 from "..//..//images/d4.png";
import d5 from "..//..//images/d5.png";
import d6 from "..//..//images/d6.png";
import d7 from "..//..//images/d7.png";
import d8 from "..//..//images/d8.png";
import fam from "..//..//images/Fam.png";
import order from "..//..//images/order.png";
import mk from "..//..//images/mk.png";

import {
  MainSection,
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
  HeroImg,
  HeroContainer,
  HeroContainerDescr,
  HeroContainerTitle,
  HeroContainerBtn,
  This,
  ThisTitle,
  ThisList,
  ThisListItem,
  ThisListItems,
  Design,
  DesignTitle,
  DesignList,
  DesignItem,
  DesignItemImg,
  DesignItemText,
  Family,
  FamilyTitle,
  FamilyAbout,
  FamilyAboutTitle,
  FamilyAboutText,
  FamilyAboutBtn,
  FamilyImg,
  FamilyContainer,
  Services,
  ServicesOrder,
  ServicesOrderImg,
  ServicesMK,
  ServicesMKimg,
  ServicesContainer,
  ServicesSubTitle,
  ServicesText,
  ServicesBtn,
  ServicesTitle,
  Varanty,
  VarantyContainer,
  VarantySection,
  VarantyTitle,
  VarantyText,
  HeroContainerLink,
  Scroll,
} from "./main.styled";
import { NavLink } from "react-router-dom";

import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function Main() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [See, setSee] = useState(false);
  const handleCloseServises = () => setSee(false);
  const handleShowServises = () => setSee(true);

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
    <MainSection>
      <ContainerHeader>
        <List>
          <Item>
            <NavLink to="/master" activeClassName="active">
              Мастер-классы
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/order" activeClassName="active">
              Мебель на заказ
            </NavLink>
          </Item>
        </List>
        <Brand src={brand} alt="brand"></Brand>
        <List>
          <Item>
            <NavLink to="/" activeClassName="active">
              Главная
            </NavLink>
          </Item>

          <Item>
            <NavLink to="/about" activeClassName="active">
              О нас
            </NavLink>
          </Item>
        </List>
      </ContainerHeader>
      <Hero>
        <HeroImg src={main}></HeroImg>
        <HeroContainer>
          <HeroContainerDescr>
            Столярная мастерская NIKASON BRAND
          </HeroContainerDescr>
          <HeroContainerTitle>
            Изготовление и реставрация мебели
          </HeroContainerTitle>
          <HeroContainerDescr>
            Авторская мебель ручной работы, сделанная с душой и трепетом.
          </HeroContainerDescr>
          <HeroContainerBtn>
            <HeroContainerLink href="#services">
              Смотреть услуги
            </HeroContainerLink>
          </HeroContainerBtn>
        </HeroContainer>
      </Hero>
      <This>
        <ThisTitle>NIKASON BRAND это</ThisTitle>
        <ThisList>
          <ThisListItems>
            <ThisListItem>
              Производство авторской мебели из массива
            </ThisListItem>
          </ThisListItems>

          <ThisListItems>
            <ThisListItem>
              Реставрация, редизайн, ремонт деревянной мебели
            </ThisListItem>
          </ThisListItems>

          <ThisListItems>
            <ThisListItem>
              Производство мебели по индивидуальным размерам
            </ThisListItem>
          </ThisListItems>
        </ThisList>
      </This>

      <Design>
        <DesignTitle>Более 10 лет мы производим</DesignTitle>
        <DesignList>
          <DesignItem>
            <DesignItemImg src={d1}></DesignItemImg>
            <DesignItemText>Двери</DesignItemText>
          </DesignItem>

          <DesignItem>
            <DesignItemImg src={d2}></DesignItemImg>
            <DesignItemText>Шкафы</DesignItemText>
          </DesignItem>

          <DesignItem>
            <DesignItemImg src={d3}></DesignItemImg>
            <DesignItemText>Столы и стулья</DesignItemText>
          </DesignItem>

          <DesignItem>
            <DesignItemImg src={d4}></DesignItemImg>
            <DesignItemText>Комоды</DesignItemText>
          </DesignItem>

          <DesignItem>
            <DesignItemImg src={d5}></DesignItemImg>
            <DesignItemText>Тумбы</DesignItemText>
          </DesignItem>

          <DesignItem>
            <DesignItemImg src={d6}></DesignItemImg>
            <DesignItemText>Арки</DesignItemText>
          </DesignItem>

          <DesignItem>
            <DesignItemImg src={d7}></DesignItemImg>
            <DesignItemText>Перегородки</DesignItemText>
          </DesignItem>

          <DesignItem>
            <DesignItemImg src={d8}></DesignItemImg>
            <DesignItemText>Кровати</DesignItemText>
          </DesignItem>
        </DesignList>
      </Design>

      <Family>
        <FamilyTitle>NIKASON BRAND это семейная мастеркая</FamilyTitle>
        <FamilyContainer>
          <FamilyImg src={fam}></FamilyImg>
          <FamilyAbout>
            <FamilyAboutTitle>
              Саргылана и Никита Колодезниковы-Матчитовы
            </FamilyAboutTitle>
            <FamilyAboutText>
              Саргылана - рестовратор-декоратор, преображает и дарит вторую
              жизнь старой мебели.
              <br />
              <br />
              Никита - мастер по дереву, вся мебель делается его умелыми руками.
            </FamilyAboutText>
            <FamilyAboutBtn variant="primary" onClick={handleShow}>
              Подробнее о нас
            </FamilyAboutBtn>
          </FamilyAbout>
        </FamilyContainer>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>О НАС</Modal.Title>
          </Modal.Header>
          <Modal.Body>NIKASON BRAND это семейная мастеркая</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Understood
            </Button>
          </Modal.Footer>
        </Modal>
      </Family>

      <Services>
        <ServicesTitle id="services">Наши услуги</ServicesTitle>
        <ServicesOrder>
          <ServicesOrderImg src={order}></ServicesOrderImg>
          <ServicesContainer>
            <ServicesSubTitle>Мебель на заказ</ServicesSubTitle>
            <ServicesText>
              Мебель под заказ по индивидуальным размерам это гарантия отличного
              качества, долговечность, экологичность и эксклюзивность наших
              изделий. Возможность создания своего неповторимого стиля,
              уникальность и неповторимость каждого изделия.
            </ServicesText>
            <ServicesBtn onClick={handleShowServises}>
              Заказать мебель
            </ServicesBtn>
          </ServicesContainer>
        </ServicesOrder>
        <ServicesMK>
          <ServicesMKimg src={mk}></ServicesMKimg>
          <ServicesContainer>
            <ServicesSubTitle>Мастер-классы</ServicesSubTitle>
            <ServicesText>
              Что делать, если память о предках хочется сохранить, но к вашему
              интерьеру старая и испорченная мебель не подходит?
              <br />
              Правильно, отреставрировать его и наслаждаться не только
              обновлённым видом мебели, но и с теплотой помнить, что эта мебель
              была сделана талантливыми предками.
            </ServicesText>
            <ServicesBtn variant="primary" onClick={handleShowServises}>
              Купить мастер-класс
            </ServicesBtn>
          </ServicesContainer>
        </ServicesMK>

        <Modal show={See} onHide={handleCloseServises}>
          <Modal.Header closeButton>
            <Modal.Title>Данные для связи</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tel</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="067 365 0 769"
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Пожелания</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="НАПРИМЕР: Мессенджер для связи "
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseServises}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={handleCloseServises}>
              Отправить
            </Button>
          </Modal.Footer>
        </Modal>
      </Services>

      <Varanty>
        <VarantyContainer>
          <VarantySection>
            <VarantyTitle>
              Гарантия качества мебели от NIKASON BRAND
            </VarantyTitle>
            <VarantyText>
              На каждое изделие ставим авторский логотип (клеймо) как знак
              качества и узнаваемости мастера.
              <br />
              Таким образом мастер несёт ответственность за каждое изделие
              помеченное печатью. Есть гарантия на 12 месяцев.{" "}
            </VarantyText>
          </VarantySection>
        </VarantyContainer>
      </Varanty>
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
      <Scroll href="#">
        SCROLL <br />
        TO TOP
      </Scroll>
    </MainSection>
  );
}
