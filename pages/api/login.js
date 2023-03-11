export default async function handler(req, res) {
    const {email, password} = req.query;
    const hash = req.cookies['hash'];
    if (hash) {
        res.status(500).json({error: 'Already Logged In'});
    } else {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login?email=${email}&password=${password}`, {credentials: 'include'});
        const data = await response.json();
        if (response.ok) {
            res.status(200).json({'hash': data.hash});
        } else {
            res.status(response.status).json({ error: data.error });
        }
    }
}