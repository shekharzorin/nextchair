import Link from 'next/link';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', href, className, fullWidth, ...props }) => {
    const rootClassName = `
    ${styles.button} 
    ${styles[variant]} 
    ${fullWidth ? styles.fullWidth : ''} 
    ${className || ''}
  `.trim();

    if (href) {
        return (
            <Link href={href} className={rootClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={rootClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
