import { Button } from 'styles/globalComponents'
import { HeroContainer, HeroContent } from './styles'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Dezembro Promocional</h1>
        <p>Produtos selecionados com 33% de desconto</p>
        <Button $width="130px" $height="50px" $variant="primary">
          Ver Consoles
        </Button>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
