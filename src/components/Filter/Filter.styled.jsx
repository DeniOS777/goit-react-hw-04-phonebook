import styled from 'styled-components';

export const FilterLabel = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  letter-spacing: 0.02em;
`;

export const InputSearch = styled.input`
  margin-right: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.03em;
  border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
  border-radius: ${p => p.theme.radii.sm};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.textPlaceholder};
    letter-spacing: 0.03em;
  }
`;
