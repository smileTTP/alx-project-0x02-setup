import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className="flex justify-center">
                <h1 className="text-7xl font-thin">About</h1>
            </div>
            <div className="space-x-8 flex justify-center">
                <Button title="Small" size="small" shape="rounded-sm" />
                <Button title="Medium" size="medium" shape="rounded-md" />
                <Button title="Large" size="large" shape="rounded-full" />
            </div>
        </div>
    );
}
export default About;