const Navbar = () =>{
    return(
        <nav className="bg-purple-600 flex justify-between items-center px-6 py-2 h-15 mycontainer">
            <div className="logo font-bold">PassOps</div>
           <ul>
            <li className="flex gap-5">
                <a className="hover:font-bold " href="/">Home</a>
                <a className="hover:font-bold " href="/">About us</a>
                <a className="hover:font-bold " href="/">Contact</a>
                <a className="hover:font-bold " href="/">Help</a>
            </li>
           </ul>

        </nav>
    )
}

export default Navbar