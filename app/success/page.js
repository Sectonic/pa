import Link from 'next/link';
import { redirect } from 'next/navigation';
import { createCustomer } from '@lib/customer';
import { createMetaData } from "@lib/metadata";

export const metadata = createMetaData({
  title: 'Success',
  url: '/success',
});

export default async function Success({ searchParams }) {

    redirect('/');

    const res = await createCustomer(searchParams.session_id);
    if (!res) {
        redirect('/academyplus');
    }

    return (
        <div className="full_background">
            <div className="register_section">
                <Link href='/'><div className='register_back'>Go Home</div></Link>
                <img className="register_img" src="/img/academyplus/academyplus_exclusive.png"/>
                <div className="register_title">{res}</div>
            </div>
        </div>
    )
}