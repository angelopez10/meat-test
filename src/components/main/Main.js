import React, { useEffect, useContext } from "react";
import { Context } from "../../AppContext";
import { Title } from "../../styles/Title";
import { TitleBrush } from "../../styles/TitleBrush";
import { TitleContainer } from "../../styles/TitleContainer";
import { CardsContainer } from "./CardsContainer";
import { MainContainer } from "./MainContainer";
import Card from "./cards/Card";
import Menu from "./menu/Menu";

export default function Main() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getArticles();
  }, []);

  return (
    <>
      <TitleContainer>
        <Title>Nuestros artículos</Title>
        <TitleBrush />
      </TitleContainer>
      <MainContainer>
        <Menu />
        <CardsContainer>
          {store.articles &&
            store.articles.map((item, key) => {
              return (
                <Card
                  image={item.image}
                  title={item.title}
                  content={item.content}
                  key={key}
                />
              );
            })}
        </CardsContainer>
      </MainContainer>
    </>
  );
}
