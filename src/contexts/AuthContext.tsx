import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  country: string;
  cohort: string;
  joinDate: string;
  avatar: string;
  progress: {
    completedLessons: number;
    totalLessons: number;
    completedAssignments: number;
    totalAssignments: number;
    currentWeek: number;
    points: number;
    rank: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('sui-hub-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    if (email === 'student@suihubafrica.com' && password === 'demo123') {
      const mockUser: User = {
        id: '1',
        name: 'Kwame Asante',
        email: 'student@suihubafrica.com',
        country: '🇬🇭 Ghana',
        cohort: 'Cohort 3',
        joinDate: '2025-01-15',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        progress: {
          completedLessons: 18,
          totalLessons: 40,
          completedAssignments: 6,
          totalAssignments: 10,
          currentWeek: 7,
          points: 2450,
          rank: 3
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('sui-hub-user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sui-hub-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};