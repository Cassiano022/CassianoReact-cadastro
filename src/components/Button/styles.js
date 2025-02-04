import styled from "styled-components";

export const Button = styled.button`
  border: ${ props => props.theme === "primary" ? "none" : "1px solid rgb(68, 241, 241)"};
  background: ${(props) =>
    props.theme === "primary"
      ? "linear-gradient(180deg,rgb(68, 241, 241) ,rgb(21, 79, 204) 100%)"
      : "transparent"};
  font-size: 16px;
  color: rgba(205, 0, 247, 0.9);
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;
