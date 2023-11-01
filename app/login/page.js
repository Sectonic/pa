import { createMetaData } from "@lib/metadata";
import Login from "./login";

// export async function generateMetadata({ searchParams }) {

//     if (!searchParams.callback) {
//         return createMetaData({
            
//         });
//     }
   
//     return {
//       title: product.title,
//       openGraph: {
//         images: ['/some-specific-page-image.jpg'],
//       },
//     }
// }

export default function Page() {
    return <Login/>
}