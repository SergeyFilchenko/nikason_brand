import styled from "styled-components";
import logo from "..//..//images/heroMaster.png";
import circle from "..//..//images/Circle.png";

export const MasterClass = styled.div``;

// HEADER

export const ContainerHeader = styled.div`
  min-width: 1440px;
  padding: 68px 0px 54px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  color: #323232;
  :not(:last-child) {
    margin-right: 125px;
  }
`;
export const Brand = styled.img`
  margin-right: 250px;
  margin-left: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 87px;
  height: 86px;
`;

// HEROES

export const Hero = styled.div`
  min-width: 1440px;
  height: 639px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const HeroTitle = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 150%;
  color: #f6f6f6;
  margin-bottom: 97px;
`;

export const HeroBtn = styled.button`
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
export const WorkSection = styled.div``;
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
  margin-left: 454px;
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
`;
export const RestoreTitle = styled.h1`
  margin-left: 140px;
  margin-bottom: 104px;
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
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
  display: flex;
  margin-left: 140px;
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
  padding: 0px 140px 0px 140px;
`;
export const RedesignLeft = styled.div``;
export const RedesignTitle = styled.h1`
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 181px;
  min-width: 1440px;
  height: 380px;
  background: #715b4b;
`;
export const FooterSection = styled.div``;
export const FooterSectionList = styled.ul``;
export const FooterSectionItem = styled.li`
  line-height: 150%;
  color: #f6f6f6;
  :not(last-child) {
    margin-bottom: 30px;
  }
`;
export const Link = styled.a``;

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
