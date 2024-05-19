import styled from "styled-components";

export const ButtonStyles = styled.button`
  font-family: Manrope;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  padding: 0 20px;
  height: 54px;
  border-radius: 16px;
  background: var(--accent-gradient);
  transition: color .4s ease; 
  
  &:hover {
    background: #00F1F5;
    color: #fff;
  }
`;  
