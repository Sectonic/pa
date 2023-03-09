export default async function handler(req, res) {
    const {hash} = req.query;
    if (hash === "undefined") {
        res.status(500).json({'error': 'No User'});
    } else {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/delete/user?hash=${hash}`, {credentials: 'include'});
        if (response.ok) {
            res.status(200).json({'success': 'Successfully Deleted Account'});
        } else {
            res.status(500).json({'error': 'Could not delete user'});
        }
    }
}