import styled from "styled-components";


export const MenuItem = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 23px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #3F454A;

  ${(props) =>
    props.active &&
    `
    color: #D8AD3D;
    `}
`;
