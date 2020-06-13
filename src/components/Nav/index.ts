import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 2rem;
  list-style: none;
`;

export const A = styled.a.attrs(() => ({ tabIndex: 0 }))`
  display: inline-block;
  outline: none;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    position: relative;
    transition: all 0.3s;
&:before {
        content: "";
        width: 0;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 50%;
        background: #000;
        transition: all ease-in 0.3s;
    }
&:hover {
    &:before {
            width: 100%;
            left: 0;
            background: #fff;
        }
    }
`;
