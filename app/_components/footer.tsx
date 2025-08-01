import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-500">
            © 2025 Copyright <strong>FSW Barber</strong>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
