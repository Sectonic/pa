export default async function handler(req, res) {
    const hash = req.cookies['hash'];
    if (hash) {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?hash=${hash}`, {credentials: 'include'});
        const data = await request.json();
        if (data.customer_id) {
            res.status(200).json({'response': 'Previous Subscriptions'});
        } else {
            res.status(404).json({'response': 'No Previous Subscription'});
        }
    } else {
        res.status(404).end();
    }
}