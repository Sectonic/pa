export default async function handler(req, res) {
    const hash = req.cookies['hash'];
    if (!hash) {
        res.status(500).json({'error': 'No User'});
    } else {
        let requestOptions = {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                session_id: session_id,
                hash: hash
            })
        }
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/add/subscription`, requestOptions);
        if (request.ok) {
            res.status(200).json({'response': 'Customer Account Created'});
        } else {
            res.status(404).json({'response': "Account Already Exists"});
        }
    }
}