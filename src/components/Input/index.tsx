import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  aditionalClasses?: string
}

const Input: React.FC<InputProps> = ({ aditionalClasses, ...rest }) => (
  <input
    className={`w-full h-10 border border-[#E4E6EF] rounded-md outline-none i-padding ${aditionalClasses}`}
    {...rest}
  />
)

export default Input
