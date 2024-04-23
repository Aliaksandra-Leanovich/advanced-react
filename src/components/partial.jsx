export const partial = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "large" ? "25px" : "16px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const SmallButton = partial(Button, { size: "small" });

export const LargeRedButton = partial(Button, {
  size: "large",
  color: "crimson",
});
