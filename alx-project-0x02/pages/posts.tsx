import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";

interface Placeholder {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface PostsPageProps {
    posts: Placeholder[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
    
    return (
        <div>
            <Header/>
            <main>
                <div className="flex justify-center">
                    <h1 className="text-7xl font-thin">Posts</h1>
                </div>
                <div className="px-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
                {
                    posts?.map((post) => (
                    <PostCard title={post.title} content={post.body} userId={post.userId} key={post.id}/>
                    ))
                }
                </div>
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts: Placeholder = await response.json()
    return {
    props: {
        posts
    }
    }
}
export default Posts;