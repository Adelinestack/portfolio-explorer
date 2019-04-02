import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;

  & ul {
    list-style: none;
    padding: 0;
  }
  & li {
    display: inline-block;
    margin: 20px;
  }
`;

export const StyledNavLink = styled(Link)`
  color: #afa72e;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: #afa72e;
    border-bottom: 1px solid #afa72e;
  }
`;

export const ImgBlock = styled.div`
  box-shadow: 0px 0px 60px 8px #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Path = styled.div`
  margin: 20px 0;
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 20px;
`;
