import styled from 'styled-components'
import { colors, media } from 'styles/variablesCss'

export const HeroContainer = styled.div`
  position: relative;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(/imgs/banner.jpg);
  background-size: cover;
  background-position: center;
  height: 352px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(${media.globalPadding});
  padding-bottom: 32px;
  z-index: 0;
  color: ${colors.white};
  justify-content: flex-end;
  font-weight: bold;

  h1 {
    font-size: 52px;
  }

  p {
    font-size: 22px;
  }
`
