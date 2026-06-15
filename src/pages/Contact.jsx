import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandGmail } from '@tabler/icons-react';
import { IconPhone } from '@tabler/icons-react';


function Contact() {
    return(
        <div className="bg-primary text-white p-5 rounded">
            <h1>Our contacts are:</h1>
            <IconBrandGmail/><h5>Email: GameZone@sdgku.com</h5>
            <IconPhone/><h5>Phone: 665-736-8463</h5>
            <IconBrandFacebook/><h5>Facebook: GameZone!</h5>
        </div>
    )
}

export default Contact