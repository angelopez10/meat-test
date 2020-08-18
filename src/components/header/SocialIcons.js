import styled from "styled-components";
import { ReactComponent as FacebookSvg } from "../../assets/facebook-icon.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/youtube-icon.svg";
import { ReactComponent as InstagramSvg } from "../../assets/instagram-icon.svg";

export const FacebookIcon = styled(FacebookSvg)`
  position: absolute;
  left: 35.42%;
  right: 18.61%;
  top: 22.49%;
  bottom: 96.43%;
`;

export const YoutubeIcon = styled(YoutubeSvg)`
  position: absolute;
  left: 28.42%;
  right: 8.61%;
  top: 32.49%;
  bottom: 96.43%;
`;

export const InstagramIcon = styled(InstagramSvg)`
  position: absolute;
  left: 28.42%;
  right: 18.61%;
  top: 30.49%;
  bottom: 96.43%;
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 1034px;
  top: 42px;
  background: rgba(255, 255, 255, 0.15);
  border: 3px solid #009cd9;
  border-radius: 50%;
  box-sizing: border-box;
  backdrop-filter: blur(14px);

  ${(props) =>
    props.instagram &&
    `
      background: rgba(255, 255, 255, 0.15);
      left: 1126px;
      border: 3px solid #b72c2c;
    `}

  ${(props) =>
    props.youtube &&
    `
    background: rgba(255, 255, 255, 0.15);
    left: 1218px;
    border: 3px solid #D8AD3D;
    `}
`;
