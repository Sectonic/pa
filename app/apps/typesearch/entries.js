import { getEntries } from "@lib/typesearch"

export const EntriesLoading = () => (
    <h3 className='banner_subtitle'>--- entries</h3>
)

export const Entries = async () => {
    const data = await getEntries();
    return <h3 className='banner_subtitle'>{data} entries</h3>
}