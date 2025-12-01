import { useEffect, useState } from "react"
import ActionButton from "../../components/ActionButton"
import Badge from "../../components/Badge"
import GridBody from "../../components/Grid/GridBody"
import GridContainer from "../../components/Grid/GridContainer"
import GridHeader from "../../components/Grid/GridHeader"
import GridItem from "../../components/Grid/GridItem"
import Eye from "../../components/Icons/Eye"
import Pen from "../../components/Icons/Pen"
import Trash from "../../components/Icons/Trash"
import SearchInput from "../../components/SearchInput"
import Title from "../../components/Title"
import type { PagesModals, Report } from "../../utils/interfaces"
import Button from "../../components/Button"
import DeleteModal from "../../components/modals/DeleteModal"
import CreateModal from "../../features/Reports/CreateModal"
import api from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { Toast } from "../../utils/toast"
import { formatAddress, formatDateTimeBR, handleBadgeColor } from "../../utils/functions"
import Pagination from "../../components/Pagination"

const Reports: React.FC = () => {

  const { token } = useAuth()

  const [reports, setReports] = useState<Report[]>([])

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemsPerPage: number = 6;

  const [modals, setModals] = useState<PagesModals>({
    create: false,
    edit: false,
    view: false,
    delete: false,
  })

  const handleModalsClick = (option: keyof PagesModals, value: boolean = true) => {
    setModals({
      create: false,
      edit: false,
      view: false,
      delete: false,
      [option]: value
    })
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const fetchReports = async () => {
    await api.get(`/user/report?page=${currentPage}&limit=${itemsPerPage}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setReports(response.data.reports)
      setTotalPages(response.data.totalPages)
    })
    .catch(error => {
      Toast.fire({
        icon: 'error',
        title: error.response.data.error
      });
    })
  }

  useEffect(() => {
    fetchReports()
  }, [token, currentPage])

  return (
    <>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-row justify-between w-full">
          <Title>Reportes</Title>

          <Button
            onClick={() => handleModalsClick('create')}
            width="w-1/6"
            background="bg-secondary"
            additionalClasses="transition-btn"
            shadow
          >Adicionar Reporte</Button>
        </div>

        <div className="flex justify-end">
          <SearchInput />
        </div>

        <div className="bg-white p-8 rounded-xl flex flex-col flex-grow overflow-hidden">
          <GridContainer additionalClasses="flex-grow overflow-y-auto">
            <GridHeader
              gridCols="grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr]"
            >
              <GridItem>Titulo</GridItem>
              <GridItem>Endereço</GridItem>
              <GridItem>Data de abertura</GridItem>
              <GridItem>Status</GridItem>
              <GridItem>Ações</GridItem>
            </GridHeader>

            {reports.map(report => (
              <GridBody
                key={report.id}
                gridCols="grid-cols-[1fr_1fr_1fr_0.5fr_0.5fr]"
              >
                <GridItem additionalClasses="h-15">{report.title}</GridItem>
                <GridItem additionalClasses="h-15">
                  {formatAddress(report.street, report.number, report.neighborhood, report.postal_code)}
                </GridItem>
                <GridItem additionalClasses="h-15">{formatDateTimeBR(report.createdAt)}</GridItem>
                <GridItem additionalClasses="h-15">
                  <Badge color={handleBadgeColor(report.status.name)}>
                    {report.status.name}
                  </Badge>
                </GridItem>
                <GridItem additionalClasses="h-15 gap-2">
                  <ActionButton onClick={() => handleModalsClick('view')}>
                    <Eye />
                  </ActionButton>

                  <ActionButton onClick={() => handleModalsClick('edit')}>
                    <Pen />
                  </ActionButton>

                  <ActionButton onClick={() => handleModalsClick('delete')}>
                    <Trash />
                  </ActionButton>
                </GridItem>
              </GridBody>
            ))}
          </GridContainer>

          <div className="flex justify-start">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrev={handlePrevPage}
              onNext={handleNextPage}
              onPageClick={handlePageClick}
            />
          </div>
        </div>
      </div>

      {modals.create &&
        <CreateModal
          onClose={() => handleModalsClick('create', false)}
          postProcessing={fetchReports}
        />
      }

      {modals.delete &&
        <DeleteModal
          type="reporte"
          onClose={() => handleModalsClick('delete', false)}
        />
      }
    </>
  )
}

export default Reports
