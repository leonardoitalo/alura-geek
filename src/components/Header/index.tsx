import { Button } from 'styles/globalComponents'
import {
  HeaderContainer,
  HeaderContent,
  HeaderSearchContainer,
  InputGroup,
} from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderSearchContainer>
          <img className="logo-desktop" src="/imgs/logo.png" alt="" />
          <img className="logo-mobile" src="/imgs/logo-mobile.png" alt="" />
          <InputGroup>
            <input
              type="text"
              placeholder="O que deseja encontrar?"
              name=""
              id=""
            />
            <img className="icon-desktop" src="/imgs/icone.png" alt="" />
          </InputGroup>
        </HeaderSearchContainer>
        <Button $variant="secondary" $width="182px" $height="50px">
          Login
        </Button>
        <img className="icon-mobile" src="/imgs/icone-mobile.png" alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
