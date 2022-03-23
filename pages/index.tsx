import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import Link from "next/link";

import { useTheme } from "./_app";
import FirstSection from "../modules/sections/first";
import SecondSection from "../modules/sections/second";
import ThirdSection from "../modules/sections/third";

import { IconButton } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Parallax } from "react-scroll-parallax";

const Home: NextPage = () => {
  const { dark, theme, toggleTheme } = useTheme();
  const [navbarBlur, setNavbarBlur] = React.useState(false);

  const setIsPastTop = (v: boolean) => {
    setNavbarBlur(v);
  };

  return (
    <>
      <Head>
        <title>Ethan Lerner</title>
        <meta name="title" content="Ethan Lerner" />
        <meta
          name="description"
          content="A website probably related to and/or about Ethan Lerner."
        />
        <meta name="theme-color" content="#000000" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lerners.io/" />
        <meta property="og:title" content="Ethan Lerner" />
        <meta
          property="og:description"
          content="A website probably related to and/or about Ethan Lerner."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lerners.io/" />
        <meta property="twitter:title" content="Ethan Lerner" />
        <meta
          property="twitter:description"
          content="A website probably related to and/or about Ethan Lerner."
        />
        <meta property="twitter:image" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, grey 1px, ${
            dark ? "black" : "white"
          } 0)`,
          backgroundSize: "40px 40px",
        }}
        className={`relative overflow-hidden ${theme}`}
      >
        <Parallax
          className={`fixed top-0 w-full z-20 h-16 flex items-center flex-row-reverse px-3 transition-all ${
            navbarBlur == true ? "shadow-md" : ""
          }`}
          style={
            navbarBlur
              ? {
                  backdropFilter: "blur(3px)",
                  background: dark
                    ? "rgb(0, 0, 0, 0.2)"
                    : "rgb(255, 255, 255, 0.5)",
                }
              : { backdropFilter: "none" }
          }
        >
          <div className="flex">
            <IconButton size="large" onClick={toggleTheme}>
              {dark ? (
                <DarkModeOutlinedIcon style={{ color: "white" }} />
              ) : (
                <LightModeOutlinedIcon style={{ color: "black" }} />
              )}
            </IconButton>
          </div>
          {navbarBlur ? (
            <div className="flex flex-1 h-full flex-row items-center px-3 gap-4 text-black dark:text-white">
              <Link href="/">
                <a className="font-bold">Ethan Lerner</a>
              </Link>
              <div className="text-gray-500 dark:text-slate-300">|</div>
              <a href="mailto:ethan@lerners.io">Email</a>
              <a href="https://github.com/miapolis">GitHub</a>
            </div>
          ) : (
            ""
          )}
        </Parallax>
        <FirstSection />
        <SecondSection setIsPastTop={setIsPastTop} />
        <ThirdSection />
      </div>
    </>
  );
};

export default Home;
