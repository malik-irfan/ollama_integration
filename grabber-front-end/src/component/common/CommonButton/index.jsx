import { Button as BootstrapButton } from "react-bootstrap";
import "./style.scss";

export function CommonButton({
  children,
  variant = "primary",
  type = "button",
  size,
  disabled = false,
  onClick,
  className = "",
}) {
  return (
    <BootstrapButton
      variant={variant}
      type={type}
      size={size}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {children}
    </BootstrapButton>
  );
}
