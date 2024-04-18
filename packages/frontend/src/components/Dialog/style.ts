import { tv } from "tailwind-variants";


export const dialogSize = tv({
    base: "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none",
    variants: {
        size: {
            small: "max-w-[450px] max-h-[500px]",
            medium: "max-w-[650px] max-h-[700px",
            large: "max-w-[850px] max-h-[900px]"
        }
    }
});