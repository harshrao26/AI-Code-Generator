
import React, { createContext, useState } from "react";



interface MessagesContextType {

  Messages: { role: string; content: string }[];

  setMessages: React.Dispatch<React.SetStateAction<{ role: string; content: string }[]>>;

}



export const MessagesContext = createContext<MessagesContextType | undefined>(undefined);
