import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string
  additionalClasses?: string
}

const Button: React.FC<ButtonProps> = ({ children, background, additionalClasses, ...rest }) => (
  <button
    className={`w-full h-10 text-white ${background} font-bold ${additionalClasses} rounded-md transition duration-300 cursor-pointer`}
    {...rest}
  >
    { children }
  </button>
)

export default Button
