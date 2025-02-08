import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Sun, Building, } from 'lucide-react'

export default function CardFiveDays() {
    return (
        <Card>
            <CardHeader>
                <div className='flex items-center gap-1'>
                    São Paulo

                    <Building className="ml-2 h-6 w-6" />
                </div>
            </CardHeader>
            <CardContent className='flex flex-col gap-1 items-center'>
                <p className='flex items-center gap-2'>
                    <Sun className="ml-2 h-6 w-6 text-amber-500" />
                    26°C
                </p>

                <span className='text-sm text-muted-foreground'>
                    Aberto
                </span>
            </CardContent>

            <CardFooter>
                <div className='flex items-center justify-between'>
                    <p>Sensação térmica: 26°C</p>

                    <p>Umidade: 50%</p>

                    <p>Pressão 1007 hPa</p>
                </div>
            </CardFooter>
        </Card>
    )
}