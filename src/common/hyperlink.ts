import type { IHyperLink } from "@/interfaces/IHyperLink"
import PlayStoreImg from "../assets/img/playstore.png";

export default function hyperlinks(type: string, {
    url,
}: {
    url: string,
}): IHyperLink {
    if(type == 'playstore') {
        return {
            img: PlayStoreImg,
            title: 'Get It On Google Play',
            url
        }
    }

    // Default to PlayStore
    return {
        img: PlayStoreImg,
        title: 'Get It On Google Play',
        url
    }
}