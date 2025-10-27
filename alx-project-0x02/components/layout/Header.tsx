import Link from 'next/link'; 

const Header: React.FC = () => {
    return (
    <header className="bg-white text-black shadow-md py-4 font-bold">
        <div className="container mx-auto flex justify-between px-4">
        <nav className="flex space-x-5 justify-center">
            
            <ul className="flex space-x-6 items-center">
            <li className="hover:underline px-2 p-2">
                <Link href="/about">About</Link>
            </li>
            <li className="hover:underline px-2 p-2">
                <Link href="/home">Home</Link>
            </li>
            <li className="hover:underline px-2 p-2">
                <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline px-2 p-2">
                <Link href="/users">Users</Link>
            </li>
            </ul>
        </nav>
        </div>
    </header>
    );
}

export default Header;
