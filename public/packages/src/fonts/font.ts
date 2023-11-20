import { Montserrat, Poppins, Lato } from "next/font/google";
import localFont from 'next/font/local'

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '400', '500', '600'],
    variable: '--font-montserrat'
})

export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", '300', '500', "600", "700", "900"],
    variable: "--font-poppins",
});



export const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700"],
    variable: "--font-lato",
});


export const agina = localFont({
    src: [
        {
            path: './local-fonts/Agina.otf',
            weight: '500',
            style: 'black',
        },
        {
            path: './local-fonts/AthensBold.ttf',
            weight: '400',
            style: 'normal',
        }
    ]
})