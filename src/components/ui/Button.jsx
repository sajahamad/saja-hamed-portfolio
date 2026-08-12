const VARIANT_CLASSES = {
  primary: "bg-primary text-text hover:bg-blue-500",
  outline: "border border-muted/40 text-text hover:border-primary hover:text-primary",
};

function Button({
  as: Tag = "button",
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Button;
