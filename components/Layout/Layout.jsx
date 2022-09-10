import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Header from "./Header";
import AsideContext from "./Context.js";
import { ThemeProvider } from "next-themes";
import mine from "../../assets/mine.png";
import { useRouter } from "next/router";

function useExpand(initial) {
  const [state, changeState] = useState(initial);
  function toggle() {
    changeState(!state);
  }
  return [state, toggle];
}

function Me() {
  return (
    <div className="fixed w-[110px] overflow-hidden left-0 translate-y-[80%] hover:translate-y-[10%] transition-transform ease-linear z-30 bottom-0 cursor-pointer">
      <img
        src={mine.src}
        className="w-full h-auto object-contain"
        alt="me memememememe"
      />
    </div>
  );
}

function Layout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, [router.pathname]);
  const [expanded, toggle] = useExpand(false);
  return (
    <ThemeProvider
      attribute="class"
      storageKey="THEME"
      defaultTheme="light"
      themes={["light", "dark"]}
    >
      <div className="w-screen bg-darkBlue min-h-screen flex items-center flex-col text-white dark:text-lightBlue">
        <AsideContext.Provider value={[expanded, toggle]}>
          <Header />
          <Aside />
        </AsideContext.Provider>
        <main className="w-full flex-1 relative">
          <div className="absolute w-full z-10 flex items-center justify-center">
            <div
              className={`w-[30px] h-[30px] rounded-full animate-spin ${
                loading ? "opacity-100" : "opacity-0"
              }`}
              style={{
                border: "2px solid white",
                borderRightColor: "transparent",
              }}
            ></div>
          </div>
          <Me />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default Layout;
