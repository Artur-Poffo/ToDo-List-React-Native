import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
`;

export const Paragraph = styled.Text`
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`