import styled from 'styled-components';

export const Container = styled.article`
  position: relative;
  margin: 0 auto;
  max-width: 500px;
`;

export const Text = styled.section`
  padding: 2rem 0 4rem;
`;

export const ContainerDiv = styled.div`
<<<<<<< HEAD
  wigth: 100%;
  margin: 1rem 2rem;
=======
  width: 80%;
  height: 95%;
>>>>>>> 993acfcdfd8ffc9c02d395f1eec6c17156903f87
  overflow: hidden;
  transition: transform;
`;

export const A = styled.a.attrs(() => ({ tabIndex: 0 }))`
  outline: none;
  color: #000;
  text-decoration: none;
  font-size: 2rem;
  transition: color 0.3s;
    cursor: pointer;

  &:hover,
  &:focus {
      text-decoration: underline;
  }
`;

export const ContainerUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.5rem 1rem;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  position: relative;
  list-style: none;
  background-color: #fff;
  height: 10rem;
  border: 2px solid black;
  overflow: hidden;
  border-radius: 8px;
`;
