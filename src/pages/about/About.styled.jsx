import styled from "styled-components";

export const AboutSection = styled.div``;

export const ContainerHeader = styled.div`
  min-width: 1440px;
  padding: 68px 0px 54px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 1440px;
  border-bottom: 1px solid #000000;
`;

export const List = styled.ul`
  display: flex;
`;
export const Item = styled.a`
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

// HERO
export const Hero = styled.div`
  margin-top: 120px;
`;
export const HeroTitle = styled.h1`
  font-size: 48px;
  line-height: 150%;
  text-align: center;

  color: #57463a;
`;
export const HeroLogo = styled.img`
  margin-left: 185px;
  margin-top: 40px;
  margin-bottom: 155px;
`;
export const HeroList = styled.ul`
  display: flex;
  justify-content: center;
`;
export const HeroItems = styled.li`
  text-align: center;
  :not(:last-child) {
    margin-right: 150px;
  }
`;
export const HeroItem = styled.p`
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
`;
export const HeroText = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: #000000;
`;

// RESUME LEVEL

export const ResumeLevel = styled.div`
  display: flex;
  padding: 0px 140px 0px 140px;
  margin-top: 160px;
`;
export const ResumeLevelImg = styled.img`
  width: 460px;
  height: 462px;
`;
export const ResumeLevelRight = styled.div`
  margin-left: 40px;
  margin-top: 30px;
`;
export const ResumeLevelTitle = styled.h2`
  font-family: "Tenor Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  color: #000000;
`;
export const ResumeLevelDescription = styled.p`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 70px;
`;
export const ResumeLevelText = styled.p`
  width: 660px;
`;
// philosophi

export const Philosophi = styled.div`
  margin-top: 160px;
  padding: 0px 140px 0px 140px;
`;
export const PhilosophiTitle = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 150%;
  color: #57463a;
  margin-bottom: 70px;
`;
export const PhilosophiText = styled.p`
  font-weight: 300;
  font-size: 24px;
  line-height: 150%;
  text-align: right;

  color: #323232;
`;

// Feedback

export const Feedback = styled.div`
  margin-top: 160px;
  padding: 0px 140px 0px 140px;
  text-align: center;
`;
export const FeedbackTitle = styled.h1`
  font-size: 48px;
  line-height: 150%;
  margin-bottom: 100px;

  color: #57463a;
`;
export const FeedbackBtn = styled.button`
  width: 245px;
  height: 60px;
  background: #a1b29f;
  border: none;
  border-radius: 6px;

  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-align: center;

  color: #f6f6f6;
`;

//  FOOTER
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
