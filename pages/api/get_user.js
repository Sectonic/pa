export default async function handler(req, res) {
    const hash = req.cookies['hash'];
    console.log(hash);
    if (hash) {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/user?hash=${hash}`, {credentials: 'include'});
        const data = await request.json();
        if (request.ok) {
            res.status(200).json({ username: data.username, email: data.email, plus: data.plus });
        } else {
            res.status(500).json({error: 'Invalid Hash'});
        }
    } else {
        res.status(409).json({error: 'No User'});
    }
}