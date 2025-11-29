import Title from "../../components/Title"
import DataCard from "../../features/Home/DataCard"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <Title>Olá, Hermeson!</Title>

      <div className="flex flex-row gap-5 px-8">
        <DataCard
          title='Reportes em Aberto'
          count='185'
          icon='document'
        />

        <DataCard
          title='Reportes Encerrados'
          count='65'
          icon='document'
        />

        <DataCard
          title='Agendamentos em Aberto'
          count='90'
          icon='calendar'
        />

        <DataCard
          title='Agendamentos Encerrados'
          count='110'
          icon='calendar'
        />
      </div>
    </div>
  )
}

export default Home
