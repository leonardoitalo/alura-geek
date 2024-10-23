import { Button } from 'styles/globalComponents'
import { HeroContainer } from './styles'

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Dezembro Promocional</h1>
      <p>Produtos selecionados com 33% de desconto</p>
      <Button $width="130px" $height="50px" $variant="primary">
        Ver Consoles
      </Button>
    </HeroContainer>
  )
}

export default Hero
