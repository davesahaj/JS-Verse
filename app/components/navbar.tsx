import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-5xl mx-auto px-4 py-5 lg:py-10">
      <Link href={"/"} className="font-bold text-4xl">
        <span className="text-slate-600 dark:text-slate-400">The</span>
        <span className="text-primary">Arbitrary</span>
      </Link>
      <div className="flex flex-nowrap items-center gap-2 lg:gap-10">
        <div className="flex flex-nowrap items-center gap-2">
          <span className="font-medium  text-md lg:text-lg font-lato italic">
            A blog by
          </span>
          <a href="https://sahajdave.com" target="_blank">
            <Avatar>
              <AvatarImage src="https://github.com/davesahaj.png" />
              <AvatarFallback>SD</AvatarFallback>
            </Avatar>
          </a>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
