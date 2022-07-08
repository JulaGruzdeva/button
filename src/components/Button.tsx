import './Button.css';
interface ButtonProps {
    variant?: 'fill' | 'ghost' | 'stroke';
    children?: string | React.ReactNode;
    colorButton?: string;
}

function setClasses(variant: ButtonProps['variant']) {
    if (variant === 'fill' || !variant) {
        return 'buttonFill'
    }
    else if (variant === 'ghost') {
        return 'buttonGhost'
    } else if (variant === 'stroke') {
        return 'buttonStroke'
    }
}

const Button = ({ variant, children, colorButton }: ButtonProps) => {
    return (
        <button className={setClasses(variant)} >{children}</button>
    )
}
export default Button