import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex bg-red-500">
      <div className="flex">
        <HeaderItem title="test" Icon={HomeIcon} />
        <HeaderItem title="test" Icon={HomeIcon} />
      </div>
      <Image src="/../public/hulu-logo.png" alt="logo" width="50" height="20" />
    </header>
  );
}

export default Header;
