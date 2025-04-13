import { useState } from "react";
import * as S from "./Sidebar.styled";
import {
  Settings,
  Search,
  User,
  HelpCircle,
  Newspaper,
  MessageCircle,
  Image,
  Video,
  Book,
  ShoppingCart,
  Map,
  ChevronRight,
  X,
} from "lucide-react";
import GoogleLogo from "../../assets/icons/google-icon-logo (1).svg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    // In a real app, this would integrate with Google OAuth
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <S.SidebarContainer $isOpen={isOpen}>
      <S.SidebarHeader>
        <S.GoogleLogo>
          <img src={GoogleLogo} alt="Google" />
        </S.GoogleLogo>
        <S.CloseButton onClick={onClose}>
          <X size={24} />
        </S.CloseButton>
      </S.SidebarHeader>

      <S.SidebarContent>
        {isSignedIn ? (
          <S.UserSection>
            <S.Avatar>A</S.Avatar>
            <S.UserInfo>
              <S.UserName>Arun Kumar</S.UserName>
              <S.UserEmail>arun.kumar@gmail.com</S.UserEmail>
              <S.ManageAccountButton>
                Manage your Google Account
                <ChevronRight size={16} />
              </S.ManageAccountButton>
            </S.UserInfo>
          </S.UserSection>
        ) : (
          <S.SignInSection>
            <S.SignInMessage>
              Sign in to get the most out of Google
            </S.SignInMessage>
            <S.SignInButton onClick={handleSignIn}>
              <User size={18} />
              Sign in
            </S.SignInButton>
          </S.SignInSection>
        )}

        <S.Divider />

        <S.NavItems>
          <S.NavItem>
            <Search size={20} />
            <span>Search</span>
          </S.NavItem>
          <S.NavItem>
            <Image size={20} />
            <span>Images</span>
          </S.NavItem>
          <S.NavItem>
            <Video size={20} />
            <span>Videos</span>
          </S.NavItem>
          <S.NavItem>
            <ShoppingCart size={20} />
            <span>Shopping</span>
          </S.NavItem>
          <S.NavItem>
            <Book size={20} />
            <span>Books</span>
          </S.NavItem>
          <S.NavItem>
            <Newspaper size={20} />
            <span>News</span>
          </S.NavItem>
          <S.NavItem>
            <Map size={20} />
            <span>Maps</span>
          </S.NavItem>
          <S.NavItem>
            <MessageCircle size={20} />
            <span>Messages</span>
          </S.NavItem>
        </S.NavItems>

        <S.Divider />

        <S.NavItems>
          <S.NavItem>
            <Settings size={20} />
            <span>Settings</span>
          </S.NavItem>
          <S.NavItem>
            <HelpCircle size={20} />
            <span>Help & Feedback</span>
          </S.NavItem>
        </S.NavItems>

        {isSignedIn && (
          <>
            <S.Divider />
            <S.SignOutButton onClick={handleSignOut}>Sign out</S.SignOutButton>
          </>
        )}
      </S.SidebarContent>
    </S.SidebarContainer>
  );
};
