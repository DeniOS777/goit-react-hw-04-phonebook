import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const ContactName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ContactDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.white};
  border-style: none;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: background-color 300ms ease-in-out, transform 100ms ease-in-out;

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.redHover};
  }

  &:active {
    transform: scale(0.97);
  }
`;
