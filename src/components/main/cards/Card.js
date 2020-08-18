import React from "react";
import { CardContainer } from "./CardContainer";
import { ImageContainer } from "./ImageContainer";
import { Image } from "./Image";
import { Typography } from "./Typography";

export default function Card(props) {
  
  return (
      <CardContainer>
        <ImageContainer>
          <Image src={props.image} alt="image" />
        </ImageContainer>
        <Typography>
          {props.title}
        </Typography>
        <Typography secondary>
         {props.content}
        </Typography>
      </CardContainer>
  );
}
