import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/Button";
import { PenBox } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full flex justify-between px-2 py-4">
      <h1 className="text-4xl font-bold">ProFlow</h1>
      <div className="flex items-center justify-between gap-2">
        <div>
          <Button className="text-black" variant={"destructive"}>
            Create Project <PenBox />
          </Button>
        </div>
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="cursor-pointer">Sign In</Button>
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
