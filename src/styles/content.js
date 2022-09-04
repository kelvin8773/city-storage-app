import Styled from 'styled-components';

export const AppContainer = Styled.div`
  padding: ${({ theme }) => theme.space.p8};
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = Styled.div`
    box-sizing: border-box;
    padding: ${({ theme }) => theme.space.p5};
    max-width: 100%;
`;
