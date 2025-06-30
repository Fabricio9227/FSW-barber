import Header from "./_components/header"

const Home = () => {
  return (
    <div>
      {/* Header*/}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, <strong>Fabrício!</strong>
        </h2>
        <p>Segunda-feira, 30 de Junho.</p>
      </div>
    </div>
  )
}
export default Home
