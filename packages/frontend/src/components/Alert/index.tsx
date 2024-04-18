import { alertStyle } from "./style";

type Props = {
    title: string;
    description: string;
    variant?: 'success' | 'error';
}

const Alert = ({ variant = 'success', title, description }: Props) => (
    <div className="py-6">
        <div className={alertStyle({ variant })} role="alert">
            <strong className="font-bold">{title}</strong>
            <span className="block sm:inline">{description}</span>
        </div>
    </div>
);

export default Alert;