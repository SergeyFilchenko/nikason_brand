import insta from "..//..//images/Group 22.png";
import whats from "..//..//images/Group 23.png";
import telega from "..//..//images/Group 13.png";
import brand from "..//..//images/IMG_1024 1.png";
import logo from "..//..//images/Rectangle 83.png";
import resume from "..//..//images/IMG_4420 1.png";

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
  Link,
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

export default function About() {
  return (
    <AboutSection>
      <ContainerHeader>
        <List>
          <Item href="#">Мастер-классы</Item>
          <Item href="#">Мебель на заказ</Item>
        </List>
        <Brand src={brand} alt="brand"></Brand>
        <List>
          <Item href="#">Контакты</Item>
          <Item href="#">О нас</Item>
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
        <FeedbackBtn>Оставить заявку</FeedbackBtn>
      </Feedback>
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
    </AboutSection>
  );
}
