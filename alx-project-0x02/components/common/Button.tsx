import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, title }) => {
    return (
        <button className={`${size} ${shape} ${"bg-white text-black px-3 py-1"}`}>
            {title}
        </button>
    )
}

export default Button;