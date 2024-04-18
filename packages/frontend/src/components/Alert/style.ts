import { tv } from 'tailwind-variants';

export const alertStyle = tv({
    base: 'px-4 py-2 rounded relative',
    variants: {
        variant: {
            success: 'bg-green-100 border border-green-400 text-green-700',
            error: 'bg-red-100 border border-red-400 text-red-700'
        }
    }
});