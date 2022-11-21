import styled from "styled-components";
import logo from "..//..//images/hero.png";
import portfolio from "..//..//images/logo.png";

export const OrderSection = styled.div``;
export const ContainerHeader = styled.div`
  @media screen and (max-width: 767px) {
    width: 984px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #000000;
    padding: 40px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    display: flex;
    border-bottom: 1px solid #000000;
    align-items: center;
    justify-content: center;
    min-width: 1440px;
    padding: 68px 0px 54px 0px;
  }
`;

export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  color: #323232;
  :not(:last-child) {
    margin-right: 125px;
    @media screen and (min-width: 320px) and (max-width: 767px) {
      margin-right: 30px;
    }
  }
`;
export const Brand = styled.img`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-right: 50px;
    margin-left: 50px;
  }

  margin-right: 250px;
  margin-left: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 87px;
  height: 86px;
`;

// Hero

export const ContainerHero = styled.div`
  min-width: 1095px;
  height: 639px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    min-width: 1440px;
  }
`;

export const SectionHero = styled.div`
  text-align: center;
  padding-top: 230px;
  padding-bottom: 80px;
  margin-left: 90px;
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 20px;
  color: #f6f6f6;
`;
export const Title = styled.h1`
  font-size: 48px;
  color: #f6f6f6;
`;
export const SubTitle = styled.h2`
  font-size: 48px;
  color: #f6f6f6;
  margin-top: 25px;
  margin-bottom: 90px;
`;
export const Btn = styled.button`
  width: 328px;
  height: 60px;
  background: #f6f6f6;

  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  border: none;
  border-radius: 6px;
  color: #715b4b;
`;
// WhyUs

export const WhyUs = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 990px;
  }
`;
export const WhyTitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  line-height: 150%;
  color: #57463a;

  margin-top: 160px;
  margin-left: 140px;
`;
export const WhyTitles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1200px;
  padding: 100px 227px 160px 142px;
`;
export const WhyItems = styled.li``;
export const WhyList = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
`;
export const WhyText = styled.p`
  font-size: 16px;
  line-height: 150%;

  width: 320px;
  margin-bottom: 80px;
  &:before {
    content: "";
    display: flex;
    border: 1px solid #715b4b;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;
// Portfolio

export const Portfolio = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 990px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 140px;
  }
`;
export const PortfolioTitle = styled.h2`
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
  margin-bottom: 20px;
`;
export const PortfolioLogo = styled.img`
  background-image: url(${portfolio});
  width: 818px;
  height: 694.17px;
`;

// Stages

export const Stages = styled.div`
  @media screen and (max-width: 767px) {
    min-width: 990px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const StagesTitle = styled.h2`
  margin-top: 162px;
  margin-bottom: 100px;
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
  @media screen and (min-width: 768px) {
    margin-left: 134px;
  }
`;
export const StagesItems = styled.ul`
  margin-left: 134px;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    width: 1200px;
  }
`;
export const StagesList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 301px;
  height: 135px;
  border: 1px solid #000000;
  @media screen and (min-width: 768px) {
    width: 390px;
  }
`;
export const StagesListText = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 102.99%;
`;
export const StagesListDigit = styled.p`
  font-size: 48px;
  line-height: 150%;
`;

//  Footer
export const Footer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 181px;
    min-width: 1095px;
    height: 300px;
    background: #715b4b;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 181px;
    min-width: 1440px;
    height: 300px;
    background: #715b4b;
  }
`;
export const FooterSection = styled.div`
  display: flex;
`;
export const FooterSectionList = styled.ul``;
export const FooterSectionItem = styled.li`
  line-height: 150%;
  color: #f6f6f6;
  :not(last-child) {
    margin-right: 150px;
  }
`;

export const FooterSectionSocialList = styled.ul`
  display: flex;
`;
export const FooterSectionSocialItem = styled.a`
  :not(last-child) {
    margin-right: 30px;
  }
`;
export const FooterSectionSocialLogo = styled.img`
  width: 52px;
  height: 52px;
`;
