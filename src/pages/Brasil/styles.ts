import styled, {css} from 'styled-components';

interface cardProps {
  color?: 'blue' | 'red' | 'green';
}

export const Header = styled.header`
  margin-top: 24px;

  background: #E0FFFF;
  border-radius: 0px;
  width: 100%;
  padding: 4px;
  align-self: center;
  color: #3d3d4d;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
  }
`;

export const Container = styled.div`
  background: #E0FFFF;
  width: 100%;
  padding: 24px;

  strong {
    align-self: center;
    font-size: 36px;
    color: #3d3d4d;
  }

  > div {
    margin-right: 12px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Card = styled.div`
  background: #ADD8E6;
  width: 100%;
  padding: 16px;
  border-radius: 8px;

  ${(props) =>
      props.color &&
      css`
        background: ${({ color }: cardProps): string => (color === 'green' ? '#8FBC8F' : '#CD853F')};
  `}

  & + div {
    margin-left: 16px;
  }
`;

export const TableState = styled.div`
  margin-top: 20px;
  max-width: 100%;
  border-radius: 8px;

  background: '#6A5ACD';
`;
