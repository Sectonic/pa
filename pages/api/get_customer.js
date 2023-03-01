import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(GetCustomer, ironOptions);

async function GetCustomer(req, res) {
    if (req.session.user) {
        const request = await fetch(`${process.env.NEXT_PUBLIC_API}/get/customer_id?user_id=${req.session.user.id}`, {credentials: 'include'});
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