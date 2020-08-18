import styled from "styled-components";

export const Typography = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #3f454a;

  ${(props) =>
    props.secondary &&
    `
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    `}
`;
