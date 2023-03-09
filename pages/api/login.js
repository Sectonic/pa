export default async function handler(req, res) {
    const {email, password, hash} = req.query;
    if (hash != "undefined") {
        res.status(500).json({error: 'Already Logged In'});
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login?email=${email}&password=${password}`, {credentials: 'include'});
    const data = await response.json();
    if (response.ok) {
        res.status(200).json({'hash': data.hash});
    } else {
        res.status(response.status).json({ error: data.error });
    }
}