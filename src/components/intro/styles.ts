import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1170px;
  height: 100vh;
  max-height: 700px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Offer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-family: Manrope;
`;

export const Span = styled.span`

`;

export const Description = styled.p`
  font-family: Manrope;
`;
