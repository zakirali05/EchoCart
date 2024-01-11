import { cn } from "@/lib/utils";

type ChildrenProps = {
  children: React.ReactNode;
  maxWidth: string;
};

const MaxWidthWrapper = ({ children, maxWidth }: ChildrenProps) => {
  return <div className={cn(`mx-auto max-w-${maxWidth}xl`)}>{children}</div>;
};

export default MaxWidthWrapper;
