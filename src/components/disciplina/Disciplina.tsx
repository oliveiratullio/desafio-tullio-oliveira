import React from 'react';
import { MdInsertChartOutlined } from "react-icons/md";
import { DisciplinaContainer, DisciplinaData, DisciplinaDate, DisciplinaGrade, DisciplinaName } from './Styled';
import DeleteButton from '../deleteButton/DeleteButton.tsx';

const Disciplina = ({ name, date, grade, color }) => {
  return (
    <DisciplinaContainer>
      <DisciplinaData style={{ backgroundColor: color }}>
        <DisciplinaName>{name}</DisciplinaName>
        <DisciplinaDate>{date}</DisciplinaDate>
        <DisciplinaGrade>
          <MdInsertChartOutlined style={{ marginLeft: "10px", marginRight: "8px" }} />
          Nota: {grade}
        </DisciplinaGrade>
      </DisciplinaData>
      <DeleteButton />
    </DisciplinaContainer>
  );
};

export default Disciplina;