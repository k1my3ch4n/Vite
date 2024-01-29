import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'l' | 'm';
  variant?: 'purple' | 'red' | 'lined';
  className?: string;
  hasIcon?: boolean;
}

const Button = ({
  size = 'm',
  variant = 'purple',
  className = '',
  hasIcon = false,
  ...props
}: ButtonProps) => {
  const classNames = `
    ${styles.button}
    ${styles[size]}
    ${styles[variant]}
    ${hasIcon ? styles.hasIcon : ''}
    ${className} 
  `;

  return (
    <button className={classNames} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
