import styled, {css} from 'styled-components';

interface cardProps {
  color?: 'blue' | 'red' | 'green';
}

export const Header = styled.header`
  background: #FFF5EE;
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
  background: #FFF5EE;
  border-radius: 0px;
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

export const Card = styled.div<cardProps>`
  background: #ADD8E6;
  border-radius: 8px;
  width: 100%;
  padding: 24px;

  ${(props) =>
      props.color &&
      css`
        background: ${({ color }: cardProps): string => (color === 'green' ? '#8FBC8F' : '#CD853F')};
  `}

  & + div {
    margin-left: 16px;
  }
`;

export const Chart = styled.div`
  margin-top: 32px;
  width: 100%
`;
