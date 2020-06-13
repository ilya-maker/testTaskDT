import styled from 'styled-components';

export const Form = styled.form`
  max-width: 20rem;
  
  margin: 0 auto;
  padding: 0 0 1rem;
`;

export const Button = styled.button`
  width: 100%;
  
  box-sizing: border-box;
  
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  background-color: transparent;
  border: 1px solid #000;
  border-radius: 8px;

  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #000;
  }
  &[disabled] {
    color: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    &:hover {
      color: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: transparent;
      box-shadow: none;
      cursor: default;
    }
  }
`;

export const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  resize: none;
`;
