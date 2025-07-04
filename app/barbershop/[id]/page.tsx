import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // Chamando o banco de dados para buscar a barbearia pelo ID
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })
  return (
    <div>
      {/* Imagem da barbearia */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop?.name || "Barbearia"}
          src={barbershop?.imageUrl || "/default-barbershop.jpg"}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="secondary"
          className="absolute left-4 top-4"
        >
          <ChevronLeftIcon />
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* Informações da barbearia */}
      <div className="space-y-3 border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-bold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="items center flex gap-1">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-sm">5,0 (499 avaliações)</p>
        </div>
      </div>
      {/* Descrição */}
      <div className="p-5">
        <p>{barbershop?.description}</p>
      </div>
    </div>
  )
}

export default BarbershopPage
