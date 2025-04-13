import styled from "styled-components";

export const IconButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color 0.2s;
  padding: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border}20;
  }
`;
