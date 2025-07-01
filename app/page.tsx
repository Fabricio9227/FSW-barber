import { SearchIcon } from "lucide-react"
import Image from "next/image"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"

const Home = () => {
  return (
    <div>
      {/* Header*/}
      <Header />
      <div className="p-5">
        <h2 className="font-nunito text-xl font-extralight">
          Olá, <strong>Fabrício!</strong>
        </h2>
        <p className="font-nunito font-normal">Segunda-feira, 30 de Junho.</p>

        <div className="flex items-center gap-2">
          <Input placeholder="Buscar" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com o FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
export default Home
