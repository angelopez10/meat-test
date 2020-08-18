import React, { useState, useContext } from "react";
import { Context } from "../../../AppContext";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow.svg";
import { MenuContainer } from "./MenuContainer";
import { ItemContainer } from "./ItemContainer";
import { MenuItem } from "./MenuItem";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("todos");
  const { actions } = useContext(Context);

  return (
    <MenuContainer>
      <div
        onClick={() => {
          setActiveTab("todos");
          actions.getArticles();
        }}
      >
        {activeTab === "todos" ? (
          <ItemContainer>
            <MenuItem active>Todos</MenuItem>
            <ArrowIcon />
          </ItemContainer>
        ) : (
          <MenuItem id="todos">Todos</MenuItem>
        )}
      </div>
      <div
        onClick={(e) => {
          setActiveTab("productos");
          actions.getFilteredArticles(e);
        }}
      >
        {activeTab === "productos" ? (
          <ItemContainer>
            <MenuItem active>Productos</MenuItem>
            <ArrowIcon />
          </ItemContainer>
        ) : (
          <MenuItem id="productos">Productos</MenuItem>
        )}
      </div>
      <div
        onClick={(e) => {
          setActiveTab("recetas");
          actions.getFilteredArticles(e);
        }}
      >
        {activeTab === "recetas" ? (
          <ItemContainer>
            <MenuItem active>Recetas</MenuItem>
            <ArrowIcon />
          </ItemContainer>
        ) : (
          <MenuItem id="recetas">Recetas</MenuItem>
        )}
      </div>
      <div
        onClick={(e) => {
          setActiveTab("consejos");
          actions.getFilteredArticles(e);
        }}
      >
        {activeTab === "consejos" ? (
          <ItemContainer>
            <MenuItem active>Consejos</MenuItem>
            <ArrowIcon />
          </ItemContainer>
        ) : (
          <MenuItem id="consejos">Consejos</MenuItem>
        )}
      </div>
    </MenuContainer>
  );
}
