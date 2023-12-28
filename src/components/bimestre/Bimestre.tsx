import { BimestreContainer, BimestreData, BimestreTitle, BimestreTop } from './Styled';
import NotaButton from '../notaButton/NotaButton';
import Disciplina from '../disciplina/Disciplina';

const Bimestre = ({ bimestreNumber }) => {
  const disciplinas= [
    { name: 'Biologia', date: '28/12/2023', grade: '5', color: '#CC4090' },
    { name: 'Artes', date: '15/01/2024', grade: '7', color: '#05A2C2' },
    { name: 'Geografia', date: '22/02/2024', grade: '6', color: '#c26719' },
    { name: 'Sociologia', date: '10/03/2024', grade: '8', color: '#9b19c2' },
  ];
  return (
    <BimestreContainer>
      <BimestreTop>
        <BimestreTitle>Bimestre {bimestreNumber}</BimestreTitle>
        <NotaButton />
      </BimestreTop>
      <BimestreData>
        {disciplinas.map(disciplina => (
          <Disciplina
            key={disciplina.name}
            name={disciplina.name}
            date={disciplina.date}
            grade={disciplina.grade}
            color={disciplina.color}
          />
        ))}
      </BimestreData>
    </BimestreContainer>
  );
};

export default Bimestre;
