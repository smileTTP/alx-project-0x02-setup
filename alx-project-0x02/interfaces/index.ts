export interface CardProps {
    title: string;
    content: string;
}
export interface PostData {
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

export interface PostProps {
    userId: number;
    title: string;
    content: string;
}
