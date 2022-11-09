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
  Link,
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

export default function Order() {
  return (
    <OrderSection>
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
      <ContainerHero>
        <SectionHero>
          <Text>Воплотим вашу любую задумку в реальность</Text>
          <Title>Столярная мастерская </Title>
          <SubTitle>NIKASON BRAND</SubTitle>
          <Btn>Заказать мебель</Btn>
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
    </OrderSection>
  );
}
