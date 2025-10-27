import Link from 'next/link'; 

const Header: React.FC = () => {
    return (
    <header className="bg-white text-black shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
        <nav>
            <ul className="flex space-x-6">
            <li className="hover:underline">
                <Link href="/about">About</Link>
            </li>
            <li className="hover:underline">
                <Link href="/home">Home</Link>
            </li>
            <li className="hover:underline">
                <Link href="/posts">Posts</Link>
            </li>
            </ul>
        </nav>
        </div>
    </header>
    );
}

export default Header;
