'use client';
import styles from '@/styles/button.module.scss';
type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};
const Button = ({
  title,
  type = 'button',
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      <span>{title} </span>
    </button>
  );
};

export default Button;
