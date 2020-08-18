import React, { useContext } from "react";
import { Context } from "../../AppContext";
import { FormContainer } from "./FormContainer";
import { InputContainer } from "./InputContainer";
import FormTitle from "./FormTitle";
import { Label } from "./Label";
import { Input } from "./Input";
import { Button } from "./Button";
import { Container } from "./Container";
import { ButtonContainer } from "./ButtonContainer";

export default function Form() {
  const { actions } = useContext(Context);

  return (
    <div>
      <FormTitle />
      <FormContainer onSubmit={(e) => actions.handleSubmit(e)}>
        <Container>
          <InputContainer>
            <Label>Nombre</Label>
            <Input
              placeholder="Nombre"
              onChange={(e) => actions.handleChange(e)}
              required
              name="name"
            />
            <Label>Mail</Label>
            <Input
              placeholder="Mail"
              type="email"
              name="email"
              onChange={(e) => actions.handleChange(e)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Apellido</Label>
            <Input
              placeholder="Apellido"
              onChange={(e) => actions.handleChange(e)}
              required
              name="lastName"
            />
            <Label>Teléfono</Label>
            <Input
              placeholder="Teléfono"
              type="tel"
              pattern="^[0-9]*$"
              onChange={(e) => actions.handleChange(e)}
              maxLength="9"
              required
              name="phone"
            />
          </InputContainer>
        </Container>
        <ButtonContainer>
          <Button>Enviar</Button>
        </ButtonContainer>
      </FormContainer>
    </div>
  );
}
