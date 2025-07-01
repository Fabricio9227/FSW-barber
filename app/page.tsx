import { SearchIcon } from "lucide-react"
import Image from "next/image"
import Header from "./_components/header"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"
import { Button } from "./_components/ui/button"
import { Card, CardContent } from "./_components/ui/card"
import { Input } from "./_components/ui/input"

const Home = () => {
  return (
    <div>
      {/* Header*/}
      <Header />
      <div className="p-5">
        {/* Texto */}
        <h2 className="font-nunito text-xl font-extralight">
          Olá, <strong>Fabrício!</strong>
        </h2>
        <p className="font-nunito font-normal">Segunda-feira, 30 de Junho.</p>

        {/* Busca */}
        <div className="flex items-center gap-2">
          <Input placeholder="Buscar" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com o FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/* Agendamento */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* DIV DA ESQUERDA*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    alt="Barbearia"
                    src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"
                  />
                </Avatar>
                <p className="text-sm">Vintage Barber</p>
              </div>
            </div>
            {/* DIV DA DIREITA*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Junho</p>
              <p className="text-2xl font-bold">30</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Home
