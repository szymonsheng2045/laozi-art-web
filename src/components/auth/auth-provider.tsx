"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  provider: "google" | "github";
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (provider: "google" | "github") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 模拟用户数据（实际项目中应使用 Firebase Auth, Auth0 等）
const MOCK_USERS: Record<string, User> = {
  "github_user": {
    id: "gh_001",
    email: "user@github.com",
    name: "GitHub User",
    avatar: "https://github.com/github.png",
    provider: "github"
  },
  "google_user": {
    id: "gg_001",
    email: "user@gmail.com",
    name: "Google User",
    avatar: "https://lh3.googleusercontent.com/a/default-user",
    provider: "google"
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查本地存储的登录状态
    const savedUser = localStorage.getItem("laozi_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (provider: "google" | "github") => {
    setIsLoading(true);
    
    // 模拟登录流程（实际应重定向到 OAuth 页面）
    setTimeout(() => {
      const mockUser = provider === "github" 
        ? MOCK_USERS["github_user"]
        : MOCK_USERS["google_user"];
      
      setUser(mockUser);
      localStorage.setItem("laozi_user", JSON.stringify(mockUser));
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("laozi_user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
