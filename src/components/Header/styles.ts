import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 280px;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-family: ${({ theme }) => theme.FONTS.FONT_BOLD};
  font-weight: bolder;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  margin: 0 0 40px 20px;
`