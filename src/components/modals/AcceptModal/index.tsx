import Button from "../../Button"
import FillAccept from "../../Icons/FillAccept"
import Overlay from "../../Overlay"

interface AcceptModal {
  onClose(): void
  type: 'agendamento' | 'pedido' | 'reporte'
}

const AcceptModal: React.FC<AcceptModal> = ({ onClose, type }) => {
  return (
    <Overlay>
      <div className="bg-white relative w-full max-w-xl max-h-full rounded-lg">
        <div className="relative bg-neutral-primary-soft p-10">
          <button
            onClick={onClose}
            className="absolute top-3 end-2.5 text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className="text-center">
            <FillAccept additionalClasses="mx-auto mb-4"/>

            <h3 className="text-[#485558] font-bold mb-3 text-body">
              Você tem certeza que gostaria de aceitar esse {type}?
            </h3>

            <h3 className="mb-6 text-lg text-body">
              R. Teste, 999 - Messejana, 60842-220
            </h3>

            <div className="flex items-center space-x-4 justify-center">
              <Button
                width="w-32"
                onClick={() => {}}
                additionalClasses="bg-primary transition-btn"
              >
                Aceitar
              </Button>

              <Button
                width="w-32"
                onClick={onClose}
                background="bg-[#BABFC0]"
                additionalClasses="transition-cancel-button"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default AcceptModal
