function Text({ className, color = 'black', size = '16px', style, children }) {
  const textStyle = {
    color: color,
    fontSize: size,
    ...style,
  };

  return <p className={className} style={textStyle}>{children}</p>;
}

export default Text;
