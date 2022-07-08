interface CardProps {
    width: string;
    height: string;
    children?: React.ReactChild | React.ReactNode
}

const Card: React.FC<CardProps> = ({ width, height, children }: CardProps) => {
    return (
        <div style={{ width, height, background: 'gray' }}>
            {children}
        </div>
    );
}

export default Card;