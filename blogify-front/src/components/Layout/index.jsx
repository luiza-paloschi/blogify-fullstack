import NavBar from "./NavBar";

export default function Layout({ children }){
    return (
        <>
            <NavBar />
            <div className="flex flex-col h-[calc(100vh-5rem)] items-center overflow-auto">
                {children}
            </div>
        </>
        

    );
}