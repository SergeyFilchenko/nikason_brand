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
  Link,
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
} from "./main.styled";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <MainSection>
      <ContainerHeader>
        <List>
          <Item>
            <NavLink to="master">Мастер-классы</NavLink>
          </Item>
          <Item>
            <NavLink to="order">Мебель на заказ</NavLink>
          </Item>
        </List>
        <Brand src={brand} alt="brand"></Brand>
        <List>
          <Item href="#">Контакты</Item>
          <Item>
            <NavLink to="about">О нас</NavLink>
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
          <HeroContainerBtn>Смотреть услуги</HeroContainerBtn>
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
            <FamilyAboutBtn>Подробнее о нас</FamilyAboutBtn>
          </FamilyAbout>
        </FamilyContainer>
      </Family>
      <Services>
        <ServicesTitle>Наши услуги</ServicesTitle>
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
            <ServicesBtn>Заказать мебель</ServicesBtn>
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
            <ServicesBtn>Купить мастер-класс</ServicesBtn>
          </ServicesContainer>
        </ServicesMK>
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
            <Link href="./">Мастер-классы</Link>
          </FooterSectionItem>
          <FooterSectionItem>
            <Link href="./">Мебель на заказ</Link>
          </FooterSectionItem>
        </FooterSection>

        <FooterSection>
          <FooterSectionItem>
            <Link href="./">Контакты</Link>
          </FooterSectionItem>
          <FooterSectionItem>
            <Link href="./">О нас</Link>
          </FooterSectionItem>
        </FooterSection>

        <FooterSection>
          <FooterSectionItem>
            <Link href="./">Политика кофиденциальности</Link>
          </FooterSectionItem>
          <FooterSectionItem>
            <Link href="./">Договор оферты</Link>
          </FooterSectionItem>
        </FooterSection>

        <FooterSection>
          <FooterSectionSocialList>
            <FooterSectionSocialItem>
              <FooterSectionSocialLogo
                src={telega}
                alt="telegram"
              ></FooterSectionSocialLogo>
            </FooterSectionSocialItem>
            <FooterSectionSocialItem>
              <FooterSectionSocialLogo
                src={insta}
                alt="instagram"
              ></FooterSectionSocialLogo>
            </FooterSectionSocialItem>
            <FooterSectionSocialItem>
              <FooterSectionSocialLogo
                src={whats}
                alt="whatsapp"
              ></FooterSectionSocialLogo>
            </FooterSectionSocialItem>
          </FooterSectionSocialList>
        </FooterSection>
      </Footer>
    </MainSection>
  );
}
