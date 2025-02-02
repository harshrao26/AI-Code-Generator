"use client";
import React, { useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "../components/custom/Header";
import { MessagesContext } from "../context/MessagesContext";
import { UserDetailsContext } from "../context/UserDetailsContext";
const Provider = ({ children }: any) => {
  const [Messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [UserDetails, setUserDetails] = useState<{
    name: string;
    email: string;
  }>({ name: "", email: "" });
  return (
    <div>
      <UserDetailsContext.Provider value={{ UserDetails, setUserDetails }}>
        <MessagesContext.Provider value={{ Messages, setMessages }}>
          <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </NextThemesProvider>
        </MessagesContext.Provider>
      </UserDetailsContext.Provider>
    </div>
  );
};

export default Provider;
