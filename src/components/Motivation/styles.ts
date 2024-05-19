import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 460px;
  margin: 0 auto;
  padding-top: 80px;
  padding-left: 80px;
  border-radius: 28px;
  background: var(--accent-gradient);
  overflow: hidden;
  margin-bottom: 100px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

export const Title = styled.h2`
  font-family: Manrope;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
`;

export const Text = styled.p`
  font-family: Manrope;
  font-weight: 400;
  font-size: 21px;
`;

export const Image = styled.img`
  position: absolute;
  bottom: -190px;
  right: -30px;
  width: 400px;
`;