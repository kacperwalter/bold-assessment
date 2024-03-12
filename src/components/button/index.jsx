import './index.css';

const Button = ({ text, type = 'primary', customColor, customBgColor, href }) => {
    let buttonClass;
    const additionalStyles = {};

    switch (type) {
        case 'primary':
            buttonClass = 'button button-primary';
            break;
        case 'secondary':
            buttonClass = 'button button-secondary';
            break;
        case 'ghost':
            buttonClass = 'button button-ghost';
            break;
        default:
            buttonClass = 'button';
    }

    if (customColor) {
        additionalStyles.color = customColor;
    }

    if (customBgColor) {
        additionalStyles.backgroundColor = customBgColor;
    }

    const Tag = href ? 'a' : 'button';

    const commonProps = {
        className: buttonClass,
        style: additionalStyles,
        ...(href ? { href } : {})
    };

    return <Tag {...commonProps}>{text}</Tag>;
};

export default Button;