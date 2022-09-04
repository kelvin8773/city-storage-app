import Styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${({ theme }) => theme.fonts.body};
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      font-size: ${({ theme }) => theme.fonts.md};
      color: ${({ theme }) => theme.colors.grayBase};
    }
  
    h1 {
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: ${({ theme }) => theme.fonts.xl};
      color: ${({ theme }) => theme.colors.gray400};
      margin-bottom: ${({ theme }) => theme.space.p4};
    }
    
    h2 {
        font-family: ${({ theme }) => theme.fonts.body};
        font-size: ${({ theme }) => theme.fonts.lg};
        color: ${({ theme }) => theme.colors.black};
        margin-bottom: ${({ theme }) => theme.space.p3};
    }
    
    h3 {
        font-family: ${({ theme }) => theme.fonts.body};
        font-size: ${({ theme }) => theme.fonts.md};
        color: ${({ theme }) => theme.colors.black};
        margin-bottom: ${({ theme }) => theme.space.p2};
    }
  
    a {
      color:${({ theme }) => theme.colors.blue200};
      text-decoration: none;
    }
  `;

export const AppContainer = Styled.div`
  padding: ${({ theme }) => theme.space.p8};
  max-width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.gray100};
`;

export const Container = Styled.div`
    padding: ${({ theme }) => theme.space.p5};
    max-width: 100%;
`;

export const TableWrapper = Styled.table`
  box-sizing: border-box;
  width: 1024px;
  margin: 12px auto 0;
  border: solid 1px #dddddd;
  font-size: ${({ theme }) => theme.fonts.sm};
  color: ${({ theme }) => theme.colors.black};
`;

export const TableHeader = Styled.th`
  box-sizing: border-box;
  height: 36px;
  font-weight: 800;
  border: solid 1px #dddddd;
  text-align: start;
  padding: 0 ${({ theme }) => theme.space.p3};
  vertical-align: middle;
`;
