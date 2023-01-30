import styled from 'styled-components/native';

interface Props {
  isCompleted: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const Task = styled.Text<Props>`
  color: ${({ theme, isCompleted }) => isCompleted ? '#0369a1' : theme.COLORS.TEXT_PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.FONT_BOLD};
  text-decoration: ${({ isCompleted }) => isCompleted ? 'line-through' : 'none'};
`