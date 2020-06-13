import styled from 'styled-components';

export const Edit = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0.5rem;
  top: 2rem;
  min-width: 1rem;
  min-height: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  outline: none;
  color: black;
  background-color: transparent;
  border: none;
  opacity: 0.5;
  transition: all 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const Delete = styled.button`
  position: absolute;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  right: 0.5rem;
  top: 0.5rem;
  min-width: 1rem;
  min-height: 1rem;
  padding: 0.5rem;
  font-weight: bold;
  color: black;
  background-color: transparent;
  border: none;
  opacity: 0.5;
  transition: all 0.3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
