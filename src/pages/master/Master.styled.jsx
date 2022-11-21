import styled from "styled-components";
import logo from "..//..//images/heroMaster.png";
import circle from "..//..//images/Circle.png";

export const MasterClass = styled.div``;

// HEADER

export const ContainerHeader = styled.div`
  @media screen and (max-width: 767px) {
    min-width: 1095px;
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
// HEROES

export const Hero = styled.div`
  min-width: 1095px;
  height: 639px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-width: 1440px;
  }
`;
export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
  color: #f6f6f6;
  margin-bottom: 97px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const HeroBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #4c6d77;

  width: 328px;
  height: 60px;
  background: #f6f6f6;
  border: none;
  border-radius: 6px;
`;

// WORK SECTION
export const WorkSection = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 922px;
  }
`;
export const WorkTitle = styled.h1`
  margin-left: 140px;
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
`;
export const WorkItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 140px 0px 140px;
`;
export const WorkItems = styled.li`
  text-align: center;
`;
export const WorkImg = styled.img`
  margin-top: 50px;
  width: 260px;
  height: 300px;
  :not(:last-child) {
    margin-right: 40px;
  }
`;
export const WorkText = styled.p`
  margin-top: 25px;
`;

// TECHNIQUE

export const Technique = styled.div`
  margin-top: 160px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 922px;
  }
`;
export const TechniqueTitle = styled.h1`
  margin-left: 140px;
  margin-bottom: 100px;
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
`;
export const TechniqueList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media screen and (min-width: 768px) {
    margin-left: 454px;
  }
`;
export const TechniqueItems = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 59px;
  :not(:last-child) {
    &:after {
      position: absolute;
      left: 0;
      top: 89px;
      content: "";
      width: 59px;
      border: 1px solid #c4c4c4;
      transform: rotate(90deg);
    }
  }
`;
export const TechniqueItem = styled.p`
  font-size: 24px;
  line-height: 150%;
  color: #f6f6f6;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${circle});
  background-repeat: no-repeat;


  }
`;
export const TechniqueText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
  margin-left: 43px;
`;

// Мастер-классы по реставрации мебели
// RESRORED

export const Restore = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 922px;
    align-items: center;
  }
`;
export const RestoreTitle = styled.h1`
  margin-bottom: 104px;
  font-size: 40px;
  line-height: 150%;
  color: #57463a;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-left: 140px;
  }
`;
export const RestoreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 160px 0px 143px;
`;
export const RestoreItem = styled.li`
  :not(:last-child) {
    margin-right: 100px;
  }
`;
export const RestoreImg = styled.img`
  width: 200px;
  height: 247px;
`;
export const RestoreText = styled.p`
  margin-top: 23px;
  margin-bottom: 97px;
  text-align: center;
`;

export const RestoreBottom = styled.ul`
  margin-left: 140px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
export const RestoreBottomItem = styled.li`
  :not(:last-child) {
    margin-right: 150px;
  }
`;
export const RestoreBottomImg = styled.img`
  width: 560px;
  height: 560px;
`;
export const RestoreBottomText = styled.p`
  margin-top: 20px;
  text-align: center;
`;

// REDESIGNMENT

export const Redesign = styled.div`
  margin-top: 157px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    width: 922px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 140px 0px 140px;
  }
`;
export const RedesignLeft = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const RedesignTitle = styled.h1`
  font-size: 35px;
  line-height: 150%;
  color: #57463a;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
export const RedesignText = styled.p`
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 18px;
  line-height: 150%;
  color: #000000;
  width: 591px;
`;
export const RedesignBtn = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #f6f6f6;

  width: 245px;
  height: 60px;
  background: #a1b29f;
  border: none;
  border-radius: 6px;
`;
export const RedesignImg = styled.img`
  width: 469px;
  height: 475px;
`;

// FOOTER

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
