import { createGlobalStyle } from 'styled-components';

export const globalTheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    primary: '#fdb755',
    gray100: '#efefef',
    gray200: '#e6e6e6',
    gray300: '#93918f',
    gray400: '#636363',
    blue100: '#c9e4fc',
    blue200: '#85bef0',
    blue300: '#0087ff',
    blue400: '#0066ff',
    red100: '#f0b5ff',
    red200: '#d986ee',
    red300: '#eb50bc',
    red400: '#ff1395',
    green100: '#c6f8df',
    green200: '#70ebad',
    green300: '#25d87f',
    green400: '#34ca06'
  },

  fonts: {
    title: 'fantasy',
    body: 'monospace',
    xxxxl: '96px',
    xxxl: '72px',
    xxl: '48px',
    xl: '36px',
    lg: '24px',
    md: '16px',
    sm: '12px'
  },

  space: {
    p1: '4px',
    p2: '8px',
    p3: '12px',
    p4: '16px',
    p5: '20px',
    p6: '24px',
    p7: '28px',
    p8: '32px'
  }
};

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
      font-size: ${({ theme }) => theme.fonts.xxxl};
      color: ${({ theme }) => theme.colors.gray400};
    }
    
    h2 {
        font-family: ${({ theme }) => theme.fonts.body};
        font-size: ${({ theme }) => theme.fonts.lg};
        color: ${({ theme }) => theme.colors.black};
    }
    
    h3 {
        font-family: ${({ theme }) => theme.fonts.body};
        font-size: ${({ theme }) => theme.fonts.md};
        color: ${({ theme }) => theme.colors.black};
    }
  
    a {
      color:${({ theme }) => theme.colors.blue200};
      text-decoration: none;
    }
  `;
