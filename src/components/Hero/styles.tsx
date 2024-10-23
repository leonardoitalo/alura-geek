import styled from 'styled-components'
import { colors, media } from 'styles/variablesCss'

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 22%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(/imgs/banner.jpg);
  background-size: cover;
  background-position: center;
  height: 352px;
  display: flex;
  justify-content: center;
  padding: var(${media.globalPadding});
  padding-bottom: 32px;

  h1 {
    font-size: 52px;
  }

  p {
    font-size: 22px;
  }

  @media (max-width: ${media.tablet}) {
    height: 192px;
    h1 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: ${media.desktop}) {
    button {
      width: 118px;
    }
  }
`

export const HeroContent = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  color: ${colors.white};
  font-weight: bold;
`
