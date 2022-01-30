import { Flex, Heading } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Caracteristicas from '../components/Caracteristicas'
import Separador from '../components/Separador'
import Slider from '../components/Slider'

interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({continents}: HomeProps) {
  return (
    <Flex direction="column">
      <Header />

      <Banner />

      <Caracteristicas />
      <Separador />

      <Heading
        textAlign='center'
        fontWeight='500'
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />

    </Flex>
  )
}
