import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ width, bgColor, color, height }) => css`
    width: ${width || 200}px;
    border: 1px solid #f2f2f2;
    outline: none;
    padding: 6px;
    background-color: ${bgColor || "#27ca3d"};
    color: ${color || "#222222"};
    cursor: pointer;
    border-radius: 6px;
  `}
`;
export default Button;
