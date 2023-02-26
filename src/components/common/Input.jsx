import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ width }) => css`
    width: ${width || 200}px;
    border: 1px solid #a3a3a3;
    padding: 6px;
    outline: none;
    border-radius: 4px;
  `}
`;
export default Input;
