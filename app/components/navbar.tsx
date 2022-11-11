import React from "react";
import { Link } from "@remix-run/react";
import { Theme } from "./theme-provider";
import { useTheme } from "~/hooks/use-theme";
import { Themed } from "./themed";
import { LogoIcon } from "~/icons/logo";
import { IconMoon, IconSun } from "@tabler/icons";

export const Navbar: React.FC = () => {
  const [_, setTheme] = useTheme();

  return (
    <header className="flex items-center justify-between py-4 flex-initial gap-4">
      <Link to="/" className="h-8 w-8">
        <Themed
          dark={
            <LogoIcon
              width={32}
              height={32}
              bgColor="#ffffff"
              fgColor="#000000"
            />
          }
          light={<LogoIcon width={32} height={32} />}
        />
      </Link>
      <div className="flex gap-6">
        <MainLink href="/about" name="About" />
        <MainLink href="/blog" name="Blog" />
        <MainLink href="/links" name="Links" />
      </div>
      <button
        className="w-6 h-6"
        onClick={() => {
          setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK));
        }}
      >
        <Themed dark={<IconMoon />} light={<IconSun />} />
      </button>
    </header>
  );
};

const MainLink: React.FC<{ href: string; name: string }> = ({ href, name }) => {
  return (
    <Link
      to={href}
      className="transition-all text-base font-semibold hover:text-indigo-700 dark:hover:text-yellow-400"
    >
      {name}
    </Link>
  );
};
