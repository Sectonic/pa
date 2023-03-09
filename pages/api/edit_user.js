export default async function handler(req, res) {
    const {hash} = req.query;
    if (hash === "undefined") {
        res.status(500).json({'error': 'No User'});
    } else {
        const {username} = req.query;
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/edit/user?hash=${hash}&username=${username}`, {credentials: 'include'});
        if (response.ok) {
            res.status(200).json({'success': 'Successfully Edited Account'});
        } else {
            res.status(500).json({'error': 'Could not edit user'});
        }
    }
}