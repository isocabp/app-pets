import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title';
import Lista from '../ui/components/Lista/Lista';




const Home: NextPage = () => {
  return (
    <div>
      <Title title="" 
      subtitle={
      <span>Com um pequeno valor mensal você <br />
      pode <strong>adotar um pet virtualmente</strong></span>} />

      <Lista 
        pets={[
          {
            id: 1,
            nome: 'Bidu',
            historia: 'alsdkjlasdjlasd alksdjalsda asdlkjadlajd aldjaldjasld',
            foto: 'https://www.maxtotalalimentos.com.br/img/seo/9/377/5-coisas-que-fazem-seu-cachorro-viralata-feliz.jpg'
          },
          {
            id: 2,
            nome: 'Mezeno',
            historia: 'alsdkjlasdjlasd alksdjalsda asdlkjadlajd aldjaldjasld',
            foto: 'https://i.pinimg.com/564x/37/7c/b4/377cb4b88e459ab85e38bfea0d3631c3.jpg'
          },

        ]}
      />
    </div>
  )
}

export default Home
