import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding-bottom: env(safe-area-inset-bottom, 0);

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.button<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.accent : theme.colors.textSecondary};
  position: relative;
  transition: color 0.2s;
  width: 25%;

  &:active {
    opacity: 0.7;
  }
`;

export const NavLabel = styled.span`
  font-size: 11px;
  margin-top: 4px;
  font-weight: 500;
`;
