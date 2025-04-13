import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./BottomNav.styled";
import { Home, Plus, Bell, Menu } from "lucide-react";

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <S.NavContainer>
      <S.NavItem onClick={() => navigate("/")} $isActive={isActive("/")}>
        <Home size={22} />
        <S.NavLabel>Home</S.NavLabel>
      </S.NavItem>

      <S.NavItem onClick={() => {}} $isActive={false}>
        <Plus size={22} />
        <S.NavLabel>New</S.NavLabel>
      </S.NavItem>

      <S.NavItem onClick={() => {}} $isActive={false}>
        <Bell size={22} />
        <S.NavLabel>Notifications</S.NavLabel>
      </S.NavItem>

      <S.NavItem onClick={() => {}} $isActive={false}>
        <Menu size={22} />
        <S.NavLabel>Menu</S.NavLabel>
      </S.NavItem>
    </S.NavContainer>
  );
};
