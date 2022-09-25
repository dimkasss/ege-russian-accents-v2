import './Button.css';

function Button({value, color="purple"}) {
  const jsxStyle = {
    background: 'var(--' + color + ')'
  }
  return (
    <div className="Button" style={jsxStyle}>
        {value}
    </div>
  );
}

export default Button;