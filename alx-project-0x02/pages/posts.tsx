import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
    return (
        <div>
            <Header/>
            <main>
                <div className="flex justify-center">
                    <h1 className="text-7xl font-thin">Posts</h1>
                </div>
            </main>
        </div>
    );
}
export default Posts;