type ChildrenType = {
    children : React.ReactNode
}

 const AuthLayout = ({children}:ChildrenType)=>{
   return (
    <main className="flex items-center justify-center h-screen">
        {children}
    </main>
   )
}

export default AuthLayout