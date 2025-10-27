import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
    posts: UserProps[];
}
const Users: React.FC<UsersPageProps> = ({ posts }) => {
    
    
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
            <div className="flex justify-center">
                <h1 className="text-7xl font-thin">Users</h1>
            </div>
            <div className="px-5">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
                { 
                posts.map(({name, email, address }: UserProps, key: number) => (
                    <UserCard name={name} email={email} address={address} key={key} />
                ))
                }
                </div>
            </div>
            </main>
        </div>
    )
}
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
    props: {
        posts
    }
    }
}

export default Users;