import { UserButton } from "@clerk/nextjs";

const  Home = () => {
  return (
   <p>Hello EchoCart <UserButton afterSignOutUrl="/"/></p>

  )
}

export default Home