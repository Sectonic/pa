import Link from "next/link";
import TopicOptions from "./topicOptions";
import { redirect } from "next/navigation";
import { createTransport } from "nodemailer";

export default function Page({ searchParams }) {

    const sendContact = async (e) => {
        "use server";

        var topic = e.get('topic:');

        if (topic === '--') {
            redirect('/contact?' + new URLSearchParams({...searchParams, error: 'Please select a topic'}));
        } else if (topic === 'Other') {
            topic = e.get('other');
        }

        const account = process.env.NEXT_PUBLIC_MAIL;
        const pass = process.env.NEXT_PUBLIC_MAIL_PASSWORD;
        
        const transport = createTransport({
            service: "gmail",
            auth: {
                user: account,
                pass: pass
            }
        });

        const mailOptions = {
            from: account,
            to: account,
            subject: topic,
            html: `<p><strong>Email:</strong> ${e.get('email')}</p><p><strong>Name:</strong> ${e.get('name')}</p><p><strong>Message:</strong> ${e.get('description')}</p>`
        }

        await transport.sendMail(mailOptions);

        redirect('/success' + (searchParams.callback ? `?${new URLSearchParams({ callback: searchParams.callback })}` : ''));
    }

    return (
        <div className="full_background">
            <form className="register_section contact_section" action={sendContact}>
                <Link href={searchParams.callback || '/'}><div className='register_back'>Go Back</div></Link>
                <img className="register_img" src="/img/main/logo.png"/>
                <div className="register_title">Contact Us</div>
                <div className="register_subtitle">Get in touch and let us know how we can help</div>
                {searchParams.error !== '' && <div className='register_error'>{searchParams.error}</div>}
                <div className="register_inputs">
                    <div className="register_inputs_split-40-60">
                        <div>
                            <label className="register_label">Name:</label>
                            <input type="text" name='name' placeholder="Enter your full name" required />
                        </div>
                        <div>
                            <label className="register_label">Email:</label>
                            <input type="email" name='email' placeholder="name@company.xyz" required />
                        </div>
                    </div>
                    <TopicOptions />
                    <div>
                        <label className="register_label">Message:</label>
                        <textarea name='description' placeholder="What do you want to tell us?" required />
                    </div>
                </div>
                <button type="submit" className="register_btn">Send</button>
            </form>
        </div>
    )
}