import React, { useState } from "react";
import { PostModalProps, PostData } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
        const [post, setPost] = useState<PostData>({
        title: "",
        content: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
    };

    return (
        <div className="fixed bg-transparent flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="font-semibold mb-4 text-black">Add a new post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-2">
                            Title
                        </label>
                        <input type="string" id="title" name="title" placeholder="Write post title" value={post.title} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-800 font-medium mb-2">
                            Content
                        </label>
                        <input type="string" id="content" name="content" placeholder="Write post content" value={post.content} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800"/>
                    </div>
                    <div className="flex justify-between items-center">
                    <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                    Cancel
                    </button>
                    <button type="submit" className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-900 transition">
                    Add Post
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default PostModal;