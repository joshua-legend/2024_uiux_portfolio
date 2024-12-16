const Text = ({ className, text, textAlign }) => {
  return (
    <h1
      className={className}
      style={{ color: "white", fontSize: "130px", textAlign: textAlign }}
    >
      {text}
    </h1>
  );
};

export default Text;
