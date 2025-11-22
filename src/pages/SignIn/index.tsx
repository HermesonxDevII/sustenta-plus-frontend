import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import Label from "../../components/Label"
import type { LoginForm } from "../../utils/interfaces"

const SignIn: React.FC = () => {

  const [formState, setFormState] = useState<LoginForm>({
    email: '',
    password: ''
  })

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>, key: keyof LoginForm) => {
    const { value } = event.target as HTMLInputElement
    setFormState((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="flex h-screen bg-primary">
      <div className="flex flex-row m-auto h-1/2 w-1/2 shadow-lg">
        <div className="bg-secondary h-full w-[30%] rounded-l-lg">
          <h1 className="">Sustenta+</h1>
        </div>

        <form className="flex flex-col justify-between bg-white h-full w-[70%] rounded-r-lg py-18">
          <h1 className="text-primary font-bold text-3xl mx-auto">Bem-vindo de volta</h1>

          <div className="flex flex-col gap-5 w-[45%] mx-auto">
            <div className="flex flex-col gap-1">
              <Label aditionalClasses="text-sm">Email</Label>
              <Input
                type="text"
                placeholder="Digite seu email"
                onChange={(e) => handleChangeForm(e, 'email')}
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <Label aditionalClasses="text-sm">Senha</Label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                onChange={(e) => handleChangeForm(e, 'password')}
                required
              />
            </div>
          </div>

          <div className="flex w-[45%] mx-auto">
            <Button background="bg-primary">Logar</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
