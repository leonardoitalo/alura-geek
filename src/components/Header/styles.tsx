import styled from 'styled-components'
import { colors, media } from 'styles/variablesCss'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(${media.globalPadding});
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: ${media.tablet}) {
    padding-top: 16px;
    padding-bottom: 16px;

    button {
      width: 132px;
      height: 40px;
    }
  }
`

export const HeaderContent = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img.icon-mobile {
    display: none;

    @media (max-width: ${media.tablet}) {
      display: block;
    }
  }
`

export const HeaderSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  img.logo-desktop {
    display: block;

    @media (max-width: ${media.tablet}) {
      display: none;
    }
  }

  img.logo-mobile {
    display: none;

    @media (max-width: ${media.tablet}) {
      display: block;
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  gap: 178px;

  input {
    width: 162px;
    color: ${colors.gray};
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;

    @media (max-width: ${media.tablet}) {
      display: none;
    }
  }

  img.icon-desktop {
    display: block;

    @media (max-width: ${media.tablet}) {
      display: none;
    }
  }

  @media (max-width: 1100px) {
    gap: 56px;
  }
`
