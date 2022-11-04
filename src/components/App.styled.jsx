import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 10px;
  border: none;
  position: relative;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;

  span {
    display: block;
    width: 100%;
    height: 100%;
  }

  :before,
  :after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: #5d7afc;
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  :before {
    height: 0%;
    width: 2px;
  }

  :after {
    width: 0%;
    height: 2px;
  }

  :hover {
    color: #5d7afc;
    background: transparent;
  }

  :hover:before {
    height: 100%;
  }

  :hover:after {
    width: 100%;
  }

  span:before,
  span:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: #5d7afc;
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
      -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
      7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  span:before {
    width: 2px;
    height: 0%;
  }

  span:after {
    height: 2px;
    width: 0%;
  }

  span:hover:before {
    height: 100%;
  }

  span:hover:after {
    width: 100%;
  }
`;
