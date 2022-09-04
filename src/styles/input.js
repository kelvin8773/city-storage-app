import Styled from 'styled-components';

export const Input = Styled.input`
    box-sizing: border-box;
    width: 512px;
    height: 2em;
    padding: ${({ theme }) => theme.space.p4};
    border: solid 1px #fff;
    border-bottom:solid 3px ${({ theme }) => theme.colors.gray200};
    font-size: ${({ theme }) => theme.fonts.xl};
    outline:solid #fc0 0;
    transition:all 0.5s ease-in;
    z-index:1;
    &:focus {
        border-bottom:solid 3px  ${({ theme }) => theme.colors.blue100};      
    }   
 
`;
