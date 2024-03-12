import './index.css'

const Button = ({ text, type = 'primary', customColor, customBgColor }) => {
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
        additionalStyles.color = color;
    }

    if (customBgColor) {
        additionalStyles.backgroundColor = bgColor;
    }

    return (
        <button className={buttonClass} style={additionalStyles}>
            {text}
        </button>
    );
};

export default Button;