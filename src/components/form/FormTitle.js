import React from "react";
import { Title } from "../../styles/Title";
import { TitleBrush } from "../../styles/TitleBrush";
import { TitleContainer } from "../../styles/TitleContainer";

export default function FormTitle() {
  return (
    <div>
      <TitleContainer>
        <Title>Contáctanos</Title>
        <TitleBrush />
      </TitleContainer>
    </div>
  );
}
