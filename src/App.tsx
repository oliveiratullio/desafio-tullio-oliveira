
import styled from 'styled-components'
import Bimestre from './components/bimestre/Bimestre.tsx';

function App() {
  const bimestres = [1, 2, 3, 4];

  return (
    <>
     <Container>
      {bimestres.map(bimestre => (
        <Bimestre key={bimestre} bimestreNumber={bimestre} />
      ))}
    </Container>
    </>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  height: 1200px;
  background-color: #0F0F0F;
  display: flex;
  flex-direction: column;
  align-items: center;
`

