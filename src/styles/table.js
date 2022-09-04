import Styled from 'styled-components';

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
  background: ${({ theme }) => theme.colors.blue100};

`;

export const TableRow = Styled.tr`
 :nth-child(2n) {
    background: ${({ theme }) => theme.colors.gray100};
 }
`;

export const TableCell = Styled.td`
  box-sizing: border-box;
  height: 34px;
  font-weight: 400;
  border: solid 1px #dddddd;
  padding-left: 12px;
  vertical-align: middle;
  
  :first-child {
    max-width: 100px;
    width: 100px;
    padding-right: 15px;
  };

  :last-child {
    max-width: 129px;
    width: 129px;
    padding: 0 15px 0 12px;
  }

`;
