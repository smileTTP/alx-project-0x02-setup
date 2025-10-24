import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({title, content}) => {
    return (
        <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
                <h2 className="text-black font-semibold">{title}</h2>
            </div>
            <p className="text-gray-800">{content}</p>
        </div>
    );
}
export default Card;