import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/Button";
import { PenBox } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex justify-between px-2 pl-8 py-4">
      <Link href={"/"}>
        <h1 className="text-4xl font-bold">ProFlow</h1>
      </Link>
      <div className="flex items-center justify-between gap-2">
        <div>
          <Button
            className="text-white bg-red-700 cursor-pointer"
            variant={"ghost"}
          >
            Create Project <PenBox />
          </Button>
        </div>
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant={"secondary"} className="cursor-pointer">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
