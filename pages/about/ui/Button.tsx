import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => (
  <button type="button">{children}</button>
);
export default Button;
