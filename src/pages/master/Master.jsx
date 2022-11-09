import {
  ContainerHeader,
  List,
  Item,
  Brand,
  MasterClass,
  Footer,
  FooterSection,
  FooterSectionItem,
  FooterSectionSocialItem,
  FooterSectionSocialList,
  FooterSectionSocialLogo,
  Link,
  Hero,
  HeroTitle,
  HeroBtn,
  WorkSection,
  WorkTitle,
  WorkItem,
  WorkItems,
  WorkText,
  WorkImg,
  Technique,
  TechniqueTitle,
  TechniqueList,
  TechniqueItems,
  TechniqueItem,
  TechniqueText,
  Restore,
  RestoreTitle,
  RestoreList,
  RestoreItem,
  RestoreImg,
  RestoreText,
  RestoreBottom,
  RestoreBottomItem,
  RestoreBottomImg,
  RestoreBottomText,
  Redesign,
  RedesignTitle,
  RedesignText,
  RedesignBtn,
  RedesignLeft,
  RedesignImg,
} from "./Master.styled";

import insta from "..//..//images/Group 22.png";
import whats from "..//..//images/Group 23.png";
import telega from "..//..//images/Group 13.png";
import brand from "..//..//images/IMG_1024 1.png";

import m1 from "..//..//images/1.png";
import m2 from "..//..//images/2.png";
import m3 from "..//..//images/3.png";
import m4 from "..//..//images/4.png";
import m5 from "..//..//images/5.png";
import m6 from "..//..//images/6.png";
import m7 from "..//..//images/7.png";
import m8 from "..//..//images/8.png";

import r1 from "..//..//images/r1.png";
import r2 from "..//..//images/r2.png";
import r3 from "..//..//images/r3.png";
import r4 from "..//..//images/r4.png";
import r5 from "..//..//images/r5.png";
import r6 from "..//..//images/r6.png";
import r7 from "..//..//images/r7.png";
import r8 from "..//..//images/r8.png";
import r9 from "..//..//images/Rectangle 44.png";
import r10 from "..//..//images/milan-popovic-BmyXTxyDL-I-unsplash 1.png";
import { NavLink, Outlet } from "react-router-dom";

export default function Master() {
  return (
    <MasterClass>
      <ContainerHeader>
        <List>
          <Item>
            <NavLink to="master">Мастер-классы</NavLink>
          </Item>
          <Item href="#">Мебель на заказ</Item>
        </List>
        <NavLink to="main">
          <Brand src={brand} alt="brand"></Brand>
        </NavLink>

        <List>
          <Item href="#">Контакты</Item>
          <Item href="#">О нас</Item>
        </List>
      </ContainerHeader>

      <Hero>
        <HeroTitle>Нам доверяют мебель с историей в 120 лет</HeroTitle>
        <HeroBtn>Смотреть мастер-классы</HeroBtn>
      </Hero>

      <WorkSection>
        <WorkTitle>Наши работы</WorkTitle>
        <WorkItem>
          <WorkItems>
            <WorkImg src={m1}></WorkImg>
            <WorkText>До</WorkText>
          </WorkItems>

          <WorkItems>
            <WorkImg src={m2}></WorkImg>
            <WorkText>После</WorkText>
          </WorkItems>

          <WorkItems>
            <WorkImg src={m3}></WorkImg>
            <WorkText>До</WorkText>
          </WorkItems>

          <WorkItems>
            <WorkImg src={m4}></WorkImg>
            <WorkText>После</WorkText>
          </WorkItems>

          <WorkItems>
            <WorkImg src={m5}></WorkImg>
            <WorkText>До</WorkText>
          </WorkItems>

          <WorkItems>
            <WorkImg src={m6}></WorkImg>
            <WorkText>После</WorkText>
          </WorkItems>

          <WorkItems>
            <WorkImg src={m7}></WorkImg>
            <WorkText>До</WorkText>
          </WorkItems>

          <WorkItems>
            <WorkImg src={m8}></WorkImg>
            <WorkText>После</WorkText>
          </WorkItems>
        </WorkItem>
      </WorkSection>

      <Technique>
        <TechniqueTitle>Какие техники изучите на МК</TechniqueTitle>
        <TechniqueList>
          <TechniqueItems>
            <TechniqueItem>1</TechniqueItem>
            <TechniqueText>Снятие старой краски</TechniqueText>
          </TechniqueItems>

          <TechniqueItems>
            <TechniqueItem>2</TechniqueItem>
            <TechniqueText>Устранение царапин и мелких дефектов</TechniqueText>
          </TechniqueItems>

          <TechniqueItems>
            <TechniqueItem>3</TechniqueItem>
            <TechniqueText>Ремонт маленьких и больших сколов</TechniqueText>
          </TechniqueItems>

          <TechniqueItems>
            <TechniqueItem>4</TechniqueItem>
            <TechniqueText>
              Ремонт поломанной и расклеившейся мебели
            </TechniqueText>
          </TechniqueItems>

          <TechniqueItems>
            <TechniqueItem>5</TechniqueItem>
            <TechniqueText>Замена старых поврежденных деталей</TechniqueText>
          </TechniqueItems>

          <TechniqueItems>
            <TechniqueItem>6</TechniqueItem>
            <TechniqueText>
              Приемы и идеи декора. Улучшение дизайна старой мебели
            </TechniqueText>
          </TechniqueItems>

          <TechniqueItems>
            <TechniqueItem>7</TechniqueItem>
            <TechniqueText>Покраска изделия</TechniqueText>
          </TechniqueItems>
        </TechniqueList>
      </Technique>

      <Restore>
        <RestoreTitle>Мастер-классы по реставрации мебели</RestoreTitle>
        <RestoreList>
          <RestoreItem>
            <RestoreImg src={r1}></RestoreImg>
            <RestoreText>Буфет</RestoreText>
          </RestoreItem>

          <RestoreItem>
            <RestoreImg src={r2}></RestoreImg>
            <RestoreText>Сундук</RestoreText>
          </RestoreItem>

          <RestoreItem>
            <RestoreImg src={r3}></RestoreImg>
            <RestoreText>Комод</RestoreText>
          </RestoreItem>

          <RestoreItem>
            <RestoreImg src={r4}></RestoreImg>
            <RestoreText>Советское кресло</RestoreText>
          </RestoreItem>

          <RestoreItem>
            <RestoreImg src={r5}></RestoreImg>
            <RestoreText>Стол</RestoreText>
          </RestoreItem>

          <RestoreItem>
            <RestoreImg src={r6}></RestoreImg>
            <RestoreText>Стул</RestoreText>
          </RestoreItem>

          <RestoreItem>
            <RestoreImg src={r7}></RestoreImg>
            <RestoreText>Обивка стула</RestoreText>
          </RestoreItem>

          <RestoreItem>
            <RestoreImg src={r8}></RestoreImg>
            <RestoreText>Ремонт стула</RestoreText>
          </RestoreItem>
        </RestoreList>

        <RestoreTitle>Мастер-классы по столярному делу</RestoreTitle>
        <RestoreBottom>
          <RestoreBottomItem>
            <RestoreBottomImg src={r9}></RestoreBottomImg>
            <RestoreBottomText>Консольный столик</RestoreBottomText>
          </RestoreBottomItem>

          <RestoreBottomItem>
            <RestoreBottomImg src={r10}></RestoreBottomImg>
            <RestoreBottomText>Столярное дело для начинающих</RestoreBottomText>
          </RestoreBottomItem>
        </RestoreBottom>
      </Restore>

      <Redesign>
        <RedesignLeft>
          <RedesignTitle>
            Руководство по редизайну деревянной мебели
          </RedesignTitle>
          <RedesignText>
            Здесь мы собрали всю информацию от подбора инстурментов и материалов
            до сборки мебели и фурнитуры. Чтобы вы самостоятельно могли
            разобраться с нюансами работы со старой мебелью из дерева. Наше
            руководство непременно станет вашей настольной книгой по реставрации
            мебели.
          </RedesignText>
          <RedesignBtn>Подробнее</RedesignBtn>
        </RedesignLeft>
        <RedesignImg src={r10}></RedesignImg>
      </Redesign>
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
      <Outlet />
    </MasterClass>
  );
}
