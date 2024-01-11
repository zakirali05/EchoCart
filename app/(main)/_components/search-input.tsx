"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const searchProducts = () => {
    router.push(`/products?name=${searchTerm}`);
  };
  return (
    <div className="w-[50%]">
      <form onSubmit={searchProducts} className="flex gap-2 border w-full">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Products..."
          className="border-0 focus-visible:ring-0 focus:ring-offset-0 focus:ring-transparent "
        />
        <Button variant={"ghost"} size={"icon"} type="submit">
          <Search className="w-4 h-4 text-muted-foreground " />
        </Button>
      </form>
    </div>
  );
};

export default SearchInput;
