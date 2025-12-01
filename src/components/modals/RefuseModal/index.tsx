import Button from "../../Button"
import Close from "../../Icons/Close"
import Modal from "../../modal"

interface RefuseModal {
  onClose(): void
  type: 'agendamento' | 'pedido' | 'reporte'
}

const RefuseModal: React.FC<RefuseModal> = ({ onClose, type }) => {
  return (
    <Modal onClose={onClose}>
      <div className="text-center">
        <Close additionalClasses="mx-auto mb-4"/>

        <h3 className="text-[#485558] font-bold mb-3 text-body">
          Você tem certeza que gostaria de recusar esse {type}?
        </h3>

        <h3 className="mb-6 text-lg text-body">
          R. Teste, 999 - Messejana, 60842-220
        </h3>

        <div className="flex items-center space-x-4 justify-center">
          <Button
            width="w-32"
            onClick={() => {}}
            background="bg-[#DC1D54]"
            additionalClasses="transition-delete-button"
          >
            Excluir
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
    </Modal>
  )
}

export default RefuseModal
