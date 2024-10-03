import type { IHyperLink } from "@/interfaces/IHyperLink"
import PlayStoreImg from "../assets/img/playstore.png";

export default function hyperlinks(type: string, {
    url,
}: {
    url: string,
}): IHyperLink | null {
    if(type == 'playstore') {
        return {
            img: PlayStoreImg,
            title: 'Get It On Google Play',
            url
        }
    }

    return null;
}