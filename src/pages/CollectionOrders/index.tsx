import Button from "../../components/Button"
import SearchInput from "../../components/SearchInput"
import Title from "../../components/Title"

const CollectionOrders: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-between w-full">
        <Title>Pedidos de Coletas</Title>

        <Button
          width="w-1/6"
          background="bg-secondary"
          additionalClasses="transition-btn"
          shadow
        >Adicionar Pedido</Button>
      </div>

      <div className="flex justify-end">
        <SearchInput />
      </div>

      <div className="flex flex-row gap-5 px-8">

      </div>
    </div>
  )
}

export default CollectionOrders
