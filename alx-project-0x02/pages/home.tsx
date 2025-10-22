import Header from "@/components/layout/Header";

const Home: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-7xl font-thin">Home</h1>
            </div>
        </div>
    );
}
export default Home;
