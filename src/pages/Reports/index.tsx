import { useState } from "react"
import ActionButton from "../../components/ActionButton"
import ActionLink from "../../components/ActionLink"
import Anchor from "../../components/Anchor"
import Badge from "../../components/Badge"
import GridBody from "../../components/Grid/GridBody"
import GridContainer from "../../components/Grid/GridContainer"
import GridHeader from "../../components/Grid/GridHeader"
import GridItem from "../../components/Grid/GridItem"
import Eye from "../../components/Icons/Eye"
import Pen from "../../components/Icons/Pen"
import Trash from "../../components/Icons/Trash"
import DeleteModal from "../../components/modals/DeleteModal"
import SearchInput from "../../components/SearchInput"
import Title from "../../components/Title"

const Reports: React.FC = () => {

  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between w-full">
          <Title>Reportes</Title>

          <Anchor
            to="/"
            width="w-1/6"
            background="bg-secondary"
            additionalClasses="transition-btn"
            shadow
          >Adicionar Reporte</Anchor>
        </div>

        <div className="flex justify-end">
          <SearchInput />
        </div>

        <div className="bg-white p-8 rounded-xl">
          <GridContainer>
            <GridHeader
              gridCols="grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr]"
            >
              <GridItem>Titulo</GridItem>
              <GridItem>Endereço</GridItem>
              <GridItem>Data de abertura</GridItem>
              <GridItem>Status</GridItem>
              <GridItem>Ações</GridItem>
            </GridHeader>

            <GridBody
              gridCols="grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr]"
            >
              <GridItem additionalClasses="h-15">Buraco na rua</GridItem>
              <GridItem additionalClasses="h-15">R. Teste, 999 - Messejana</GridItem>
              <GridItem additionalClasses="h-15">13/11/2025 ás 18:17</GridItem>

              <GridItem additionalClasses="h-15">
                <Badge color="yellow">Em Análise</Badge>
              </GridItem>

              <GridItem additionalClasses="h-15 gap-2">
                <ActionLink to="/">
                  <Eye />
                </ActionLink>

                <ActionLink to="/">
                  <Pen />
                </ActionLink>

                <ActionButton onClick={() => setOpenDeleteModal(!openDeleteModal)}>
                  <Trash />
                </ActionButton>
              </GridItem>
            </GridBody>
          </GridContainer>
        </div>
      </div>

      {openDeleteModal &&
        <DeleteModal
          type="reporte"
          onClose={() => setOpenDeleteModal(!openDeleteModal)}
        />
      }
    </>
  )
}

export default Reports
