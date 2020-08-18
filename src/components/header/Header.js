import React from "react";
import { Background, BackgroundImage } from "./Background";
import HeroBackground from "../../assets/hero-background.jpg";
import { Logo } from "./Logo";
import {
  IconContainer,
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./SocialIcons";
import { HeadingFont } from "./HeadingFont";
import { HeadingBrush } from "./HeadingBrush";

export default function Header() {
  return (
    <div>
      <Background>
        <Logo />
        <IconContainer>
          <FacebookIcon />
        </IconContainer>
        <IconContainer instagram>
          <InstagramIcon />
        </IconContainer>
        <IconContainer youtube> 
          <YoutubeIcon />
        </IconContainer>
        <HeadingFont>El secreto de tu cocina</HeadingFont>
        <HeadingBrush />
        <BackgroundImage src={HeroBackground} />
      </Background>
    </div>
  );
}
