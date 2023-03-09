export default async function handler(req, res) {
    const {email, username, password, confirm, hash} = req.body;
    if (hash != "undefined") {
        res.status(500).json({error: 'Already Logged In'});
    } else {
        let requestOptions = {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email, username, password, confirm
            })
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API}/create/user`, requestOptions);
        const data = await response.json();
        res.status(200).send({ hash: data.hash });
    }
}