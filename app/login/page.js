import { createMetaData } from "@lib/metadata";
import Login from "./login";

export async function generateMetadata({ searchParams }) {

    if (!searchParams.callback) {
        return createMetaData({});
    }

    if (searchParams.callback.includes('typechart')) {
      return createMetaData({
        title: 'TypeChart',
        description: 'Analyze types through diagrams, trait spectrums, coins, and examples.',
        url: searchParams.callback
      });
    }

    if (searchParams.callback.includes('typesearch')) {
      return createMetaData({
        title: 'TypeSearch',
        description: 'Search through a personality database of 1900+ officially typed individuals',
        url: searchParams.callback
      });
    }

    if (searchParams.callback.includes('typechart')) {
      return createMetaData({
        title: 'Dashboard',
        description: 'Home to your Personality Academy profile',
        url: searchParams.callback
      });
    }

    return createMetaData({});

}

export default function Page() {
    return <Login/>
}