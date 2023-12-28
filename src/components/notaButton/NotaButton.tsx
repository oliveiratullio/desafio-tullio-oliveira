import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

const NotaButton = () => {
  return (
    <Button>
      Lançar nota
      <FaPlus style={{ marginLeft: "10px" }} />
    </Button>
  );
};

export default NotaButton;


const Button = styled.button`
  width: 160px;
  height: 37px;
  display: flex;
  font-weight: 600;
  font-size: 16px;
  background-color: #E9FF1A;
  border-radius: 12px;
  border: none;
  justify-content: center;
  align-items: center;
  `;
