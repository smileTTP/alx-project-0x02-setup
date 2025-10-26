export interface CardProps {
    title: string;
    content: string;
}
export interface PostData {
    id: number,
    userID: number,
    title: string;
    content: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}

export interface ButtonProps {
    title: string,
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full";
}
