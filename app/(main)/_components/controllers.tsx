import { Button } from "@/components/ui/button";
import { getUserFromId } from "@/lib/user-services";
import { UserButton, currentUser } from "@clerk/nextjs";
import { LayoutDashboard, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Controllers = async () => {
  const clerkUser = await currentUser();
  const user = await getUserFromId(clerkUser?.id);

  return (
    <div>
      {user ? (
        <div className="flex items-center ">
          {user?.isAdmin ? (
            <Button
              asChild
              variant={"ghost"}
              className="text-xm text-muted-foreground hover:text-black transition cursor-pointer"
            >
              <Link
                href={"/dashboard"}
                className="flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="hidden md:block">Dashboard</span>
              </Link>
            </Button>
          ) : (
            <></>
          )}
          <Button
            asChild
            variant={"ghost"}
            className="text-xm text-muted-foreground hover:text-black transition cursor-pointer"
          >
            <Link
              href={"/cart"}
              className="flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:block">Cart</span>
            </Link>
          </Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <Button asChild>
          <Link href={"/sign-in"}>Login </Link>
        </Button>
      )}
    </div>
  );
};

export default Controllers;
