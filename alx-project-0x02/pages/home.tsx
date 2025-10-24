import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
    const [posts, setPosts] = useState<CardProps[]>([
        {title: "Card no.1", content: "Those who carried the past carried the dead, and those who chased the future died of cardiac arrest."}, 
        {title: "Card no.2", content: "What is the point of shrouding yourself in silence? The grave will do that for you for all eternity."}
    ]);
    return (
        <div>
            <Header/>
            <main className="p-4">
            <div className="flex justify-center">
                <h1 className="text-7xl font-thin">Home</h1>
            </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
                {posts.map((post, index) => (
                    <Card key={index} title={post.title} content={post.content} />
                ))}
                </div>
            </main>
        </div>
    );
}
export default Home;
