
export const EntriesLoading = () => (
    <h3 className='banner_subtitle'>--- entries</h3>
)

export const Entries = async () => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API}/get_entries`);
    const data = await req.json();
    return <h3 className='banner_subtitle'>{data.count} entries</h3>
}