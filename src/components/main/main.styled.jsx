import styled from "styled-components";
import logo from "..//..//images/varanty.png";

export const MainSection = styled.div``;
export const Scroll = styled.a`
  width: 100px;
  border: 2px solid #ccc;
  background: #a1b29f;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  cursor: pointer;
  color: #333;
  font-family: verdana;
  font-size: 12px;
  border-radius: 21px;
`;

export const Theme = styled.button`
  width: 100px;
  border: 2px solid #ccc;
  background: #a1b29f;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 120px;
  right: 50px;
  cursor: pointer;
  color: #333;
  font-family: verdana;
  font-size: 12px;
  border-radius: 21px;
`;

export const ContainerHeader = styled.div`
  min-width: 1440px;
  padding: 68px 0px 54px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #000000;
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
export const Home = styled.li``;
export const Brand = styled.img`
  margin-right: 250px;
  margin-left: 250px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 87px;
  height: 86px;
`;
// HEROES_SECTION

export const Hero = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeroImg = styled.img``;
export const HeroContainer = styled.div`
  padding: 200px 122px 200px 40px;
`;
export const HeroContainerDescr = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
`;
export const HeroContainerTitle = styled.h1`
  width: 514px;
  font-size: 48px;
  line-height: 120%;
  color: #57463a;
  margin-top: 27px;
  margin-bottom: 40px;
`;
export const HeroContainerBtn = styled.button`
  width: 245px;
  height: 60px;
  background: #a1b29f;
  margin-top: 70px;
  border-radius: 6px;
  border: none;
`;
export const HeroContainerLink = styled.a`
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  color: #f6f6f6;
`;

//THIS_SECTION
export const This = styled.div`
  margin-top: 160px;
  padding: 0px 140px 0px 140px;
`;
export const ThisTitle = styled.h1`
  font-size: 48px;
  line-height: 120%;
  margin-bottom: 100px;

  color: #57463a;
`;
export const ThisList = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const ThisListItems = styled.li`
  :not(:last-child) {
    margin-right: 118px;
  }

  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 360px;
    height: 0px;
    left: 0px;

    border-bottom: 3px solid #715b4b;
  }
`;
export const ThisListItem = styled.p`
  width: 298px;
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 14px;
`;

// DESIGN SECTION
export const Design = styled.div`
  margin-top: 160px;
  padding: 0px 140px 0px 140px;
`;
export const DesignTitle = styled.h1`
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
  margin-bottom: 100px;
`;

export const DesignList = styled.ul`
  width: 1160px;
  height: 502px;

  display: flex;
  flex-wrap: wrap;
`;
export const DesignItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 288px;
  height: 250px;
  border: 1px solid #000000;
`;
export const DesignItemImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const DesignItemText = styled.p`
  font-size: 18px;
  line-height: 102.99%;
  text-align: center;
  margin-top: 20px;
`;

// FAMILY SECTION

export const Family = styled.div`
  margin-top: 160px;
  padding: 0px 140px 0px 140px;
`;
export const FamilyContainer = styled.div`
  display: flex;
`;
export const FamilyTitle = styled.h1`
  font-size: 48px;
  line-height: 150%;
  margin-bottom: 100px;
`;
export const FamilyImg = styled.img``;
export const FamilyAbout = styled.div`
  padding: 68px 235px 48px 40px;
`;
export const FamilyAboutTitle = styled.h2`
  font-size: 24px;
  line-height: 150%;
`;
export const FamilyAboutText = styled.p`
  width: 515px;
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  margin-top: 40px;
  margin-bottom: 52px;
`;
export const FamilyAboutBtn = styled.button`
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  color: #f6f6f6;

  width: 245px;
  height: 60px;
  border-radius: 6px;
  border: none;
  background: #a1b29f;
`;

// SERVICES SECTION

export const Services = styled.div`
  padding: 160px 0px 0px 140px;
`;
export const ServicesTitle = styled.h1`
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
  margin-bottom: 100px;
`;
export const ServicesOrder = styled.div`
  display: flex;
`;
export const ServicesOrderImg = styled.img``;
export const ServicesSubTitle = styled.h2`
  font-size: 24px;
  line-height: 150%;
`;
export const ServicesText = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  margin-top: 40px;
  margin-bottom: 55px;
  width: 539px;
`;
export const ServicesBtn = styled.button`
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  color: #f6f6f6;
  border-radius: 6px;
  border: none;
  width: 245px;
  height: 60px;
  background: #a1b29f;
`;
export const ServicesContainer = styled.div`
  padding: 110px 140px 100px 41px;
`;

export const ServicesMK = styled.div`
  display: flex;
`;
export const ServicesMKimg = styled.img``;

// VARANTY SECTION

export const Varanty = styled.div`
  text-align: center;
  padding: 160px 140px 0px 140px;
`;
export const VarantyContainer = styled.div`
  width: 1160px;
  height: 590px;
  border: 7px solid #a1b29f;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const VarantySection = styled.ul`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    right: 20px;
    bottom: 10px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
  }
  width: 1135px;
  height: 563px;
  border: 1px solid #715b4b;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const VarantyTitle = styled.h1`
  width: 658px;
  font-size: 48px;
  line-height: 150%;
  text-align: center;
  color: #57463a;
`;
export const VarantyText = styled.p`
  width: 922px;
  font-weight: 300;
  font-size: 24px;
  line-height: 150%;
  color: #000000;
  margin-top: 40px;
`;
export const Varantylogo = styled.img``;

// FOOTER_SECTION

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 181px;
  min-width: 1440px;
  height: 300px;
  background: #715b4b;
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
