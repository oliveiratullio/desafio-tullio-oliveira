import React from 'react';
import styled from 'styled-components';
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteButton = () => {
  return (
    <Button>
      <RiDeleteBin6Line style={{ color: "#ff5964", fontSize: "18px" }} />
    </Button>
  );
};

export default DeleteButton;

const Button = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0F0F0F;
`

