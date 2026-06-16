import { cva } from "class-variance-authority";

type ButtonProps = {
    variant?: "primary" | "secondary" | "danger";
    children: React.ReactNode;
};

const button = cva("btn", {
    variants: {
        variant: {
            primary: "btn-primary",
            secondary: "btn-secondary",
            danger: "btn-error"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
});

export function Button({
    variant,
    children
}: ButtonProps) {
    return (
        <button className={button({ variant })}>
            {children}
        </button>
    );
}