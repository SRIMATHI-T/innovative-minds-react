import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem('authUser')) || null;
  } catch (error) {
    return null;
  }
};

const getStoredUsers = () => {
  try {
    return JSON.parse(localStorage.getItem('users')) || [];
  } catch (error) {
    return [];
  }
};

const setStoredUsers = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getStoredUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('authUser');
    }
  }, [user]);

  const signup = ({ username, email, password, interestedTopic, newsletter }) => {
    const users = getStoredUsers();
    const existingUser = users.find((item) => item.email === email.trim().toLowerCase());

    if (existingUser) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    const newUser = {
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password,
      interestedTopic,
      newsletter
    };

    users.push(newUser);
    setStoredUsers(users);

    return { success: true, message: 'Account created successfully! Please log in.' };
  };

  const login = ({ email, password }) => {
    const users = getStoredUsers();
    const foundUser = users.find(
      (item) => item.email === email.trim().toLowerCase() && item.password === password
    );

    if (!foundUser) {
      return { success: false, message: 'Invalid email or password.' };
    }

    const authUser = {
      username: foundUser.username,
      email: foundUser.email
    };

    setUser(authUser);
    return { success: true, message: 'Login successful.' };
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, signup, login, logout }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
