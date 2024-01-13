import MaxWidthWrapper from "@/components/customComponents/max-width-wrapper";
import Navbar from "./_components/navbar";

type ChildrenProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <MaxWidthWrapper maxWidth="7">
      <Navbar/>
      {children}
    </MaxWidthWrapper>
  )
};

export default MainLayout;
