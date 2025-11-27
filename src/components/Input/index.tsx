import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  additionalClasses?: string
}

const Input: React.FC<InputProps> = ({ additionalClasses, ...rest }) => (
  <input
    className={`w-full h-10 border border-[#E4E6EF] rounded-md outline-none i-padding ${additionalClasses}`}
    {...rest}
  />
)

export default Input
