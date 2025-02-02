"use client";
import React, { useContext, useState } from "react";
import { MessagesContext } from "../../context/MessagesContext"; // Adjust the import path as necessary
import { UserDetailsContext } from "@/context/UserDetailsContext";

const Hero = () => {
  const [UserInput, setUserInput] = useState<string>("");

  //Messages Context

  const contextMessage = useContext(MessagesContext);
  if (!contextMessage) {
    throw new Error("MessagesContext must be used within a MessagesProvider");
  }
  const { Messages, setMessages } = contextMessage;

  //User Context
  const contextUser = useContext(UserDetailsContext);
  if (!contextUser) {
    throw new Error(
      "UserDetailsContext must be used within a UserDetailsProvider"
    );
  }
  const { UserDetails, setUserDetails } = contextUser;

  //Generate Function
  const onGenerate = (input: string) => {
    if(!contextUser?.name) {
      setOpenDialog(true);
      return;
    }
    setMessages([
      {
        role: "user",
        content: input,
      },
    ]);
  };
  const prompts = [
    "Create a simple login form with email and password fields.",
    "Create a simple pricing page with three pricing tiers.",
    "Create a simple dashboard with a sidebar and main content area.",
    "Create a simple profile page with a user avatar and bio.",
    "Create a simple settings page with tabs for different settings.",
    "Create a simple blog page with a list of blog posts.",
    "Create a simple contact page with a contact form.",
  ];
  return (
    <div className="flex flex-col items-center justify-center px-6 py-40 ">
      {/* Title */}
      <h2 className="text-5xl capitalize font-semibold text-gray-100 text-center leading-tight">
        What do you want to <span className="text-blue-600">build?</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-sm text-gray-600 text-center max-w-2xl">
        Prompt, run, edit, and deploy full-stack web apps with ease.
      </p>

      {/* Input Section */}
      <div className="mt- w-full max-w-3xl">
        <div className=" shadow-lg rounded-xl p-6 flex flex-col items-center text-sm">
          <textarea
            onChange={(e) => setUserInput(e.target.value)}
            rows={5}
            placeholder="Enter your prompt..."
            className="w-full p-4 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />

          {/* Generate Button */}
          {UserInput && (
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all ease-in-out">
              {" "}
              Generate{" "}
            </button>
          )}
        </div>
      </div>

      {/* Prompt Section */}
      <div className="mt-8 w-full max-w-5xl">
        <h3 className="text-2xl font-semibold text-gray-100">
          Popular Prompts
        </h3>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {prompts.map((prompt, index) => (
            <div
              key={index}
              className="py-4 px-8 border-zinc-700 border-[1.2px]  rounded-full g-zinc-900 text-xs"
            >
              <p
                onClick={() => onGenerate(prompt)}
                className="text-gray-100 font-extralight"
              >
                {prompt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
