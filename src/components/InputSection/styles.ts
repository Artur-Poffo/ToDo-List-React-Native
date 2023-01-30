import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px 20px;
  border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY_800};
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`

export const Btn = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  border-radius: 5px;
  align-items: center;
  margin-top: 20px;
`

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.FONT_BOLD};
`