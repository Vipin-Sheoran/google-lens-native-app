import styled from "styled-components";

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 85%;
  max-width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? "0 0 15px rgba(0, 0, 0, 0.2)" : "none"};
  z-index: 1000;
  transition: left 0.3s ease-in-out;
  overflow-y: auto;
`;

export const SidebarOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const GoogleLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 24px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
`;

export const SidebarContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const SignInSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SignInMessage = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SignInButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const UserSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: #4285f4;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: 500;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: 500;
`;

export const UserEmail = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ManageAccountButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.accent};
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => `${theme.spacing.md} 0`};
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  text-align: left;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const SignOutButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.md};
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
