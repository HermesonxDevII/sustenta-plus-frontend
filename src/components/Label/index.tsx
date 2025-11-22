import type { LabelHTMLAttributes } from "react"

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  aditionalClasses?: string
}

const Label: React.FC<LabelProps> = ({ children, aditionalClasses, ...rest }) => (
  <label
    className={`font-bold text-[#485558] ${aditionalClasses}`}
    {...rest}
  >
    { children }
  </label>
)

export default Label
