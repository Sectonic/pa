import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../components/config";

export default withIronSessionApiRoute(Login, ironOptions);

async function Login(req, res) {
    const {email, password} = req.query;
    if (req.session.user) {
        res.status(500).json({error: 'Already Logged In'});
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/login?email=${email}&password=${password}`, {credentials: 'include'});
    const data = await response.json();
    if (response.ok) {
        req.session.user = {
            id: data.user_id,
            email: data.email,
            username: data.username
        };
        await req.session.save();
        res.status(200).json({'success': 'Successfully Logged In'});
    } else {
        res.status(response.status).json({ error: data.error });
    }
}