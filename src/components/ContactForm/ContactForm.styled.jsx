import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[5]}px;
  width: 370px;
  border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.lm};
  letter-spacing: 0.03em;
`;

export const Input = styled.input`
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
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

export const AddContact = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.lightBold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  border-style: none;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: background-color 300ms ease-in-out, transform 100ms ease-in-out;

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.greenHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;
