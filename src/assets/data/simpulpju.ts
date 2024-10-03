import hyperlinks from "@/common/hyperlink";
import PlayStore from "../img/playstore.png";

const simpulpju = {
    id: 'simpulpju',
    hyperlinks: [
        hyperlinks('playstore', {
            url: 'https://play.google.com/store/apps/details?id=com.rangkai.user_mobile_simpulpju&pcampaignid=web_share'
        })
    ],
    position: [
        'Software Engineer',
    ],
    technology: [
        'Flutter',
        'NestJS',
        'VueJS',
        'Firebase',
        'AWS S3',
    ],
    title: 'Lapor Pak LPJU (Lampu Penerangan Jalan Umum)',
    description: "Simplify the process of reporting broken or malfunctioning traffic lights with this app. Designed for ease of use, this app allows citizens to swiftly alert local authorities about traffic signal issues. By using this app, you can help enhance road safety in your community, ensuring that critical traffic infrastructure receives prompt and efficient attention. Be a proactive participant in maintaining safe and well-functioning roads for everyone.",
    carousel: [
        {
            url: './img/simpulpju/mobile-1.png',
            alt: 'Login User',
            type: 'potrait'
        },
        {
            url: './img/simpulpju/mobile-2.png',
            alt: 'User Dashboard',
            type: 'potrait'
        },
        {
            url: './img/simpulpju/mobile-3.png',
            alt: 'Employee Dashboard',
            type: 'potrait'
        },
        {
            url: './img/simpulpju/mobile-4.png',
            alt: 'Report Detail',
            type: 'potrait'
        }
    ]
}

export default simpulpju;