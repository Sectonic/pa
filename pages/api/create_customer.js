import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(CreateCustomer, ironOptions);

async function CreateCustomer(req, res) {
    const { session_id } = req.query;
    let requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            session_id: session_id,
            hash: req.session.hash
        })
    }
    const request = await fetch(`${process.env.NEXT_PUBLIC_API}/add/subscription`, requestOptions);
    if (request.ok) {
        res.status(200).json({'response': 'Customer Account Created'});
    } else {
        res.status(404).json({'response': "Account Already Exists"});
    }

}