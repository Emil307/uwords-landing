import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  height: 100vh;
  max-height: 400px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Offer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Manrope;
  font-weight: 600;
  font-size: 36px;
`;

export const Span = styled.span`
  background-image: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  font-family: Manrope;
`;
