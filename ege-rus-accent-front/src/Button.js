import './Button.css';

function Button({value, color="purple", onClick}) {
  const jsxStyle = {
    background: 'var(--' + color + ')'
  }
  return (
    <div className="Button" style={jsxStyle} onClick={() => onClick()}>
        {value}
    </div>
  );
}

export default Button;