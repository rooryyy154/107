import {useState, useContext} from 'react';
import { IconMailOff } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
//add useContext step 1
import GlobalContext from '../state/globalContext';
//add global context step 2

function About (){
    // const [state, setState] = useState(initialValue)
    const [isEmailVisible, setEmailVisible] = useState(false);
    const user = useContext(GlobalContext).user


    function showEmail(){
        console.log("Showing email address");
        setEmailVisible(true)
    }

    function hideEmail(){
        console.log("Hiding email address");
        setEmailVisible(false)
    }

    return(
        <div className='text-center bg-primary text-white p-5 rounded'>
            <h1>Welcome to my About Page</h1>
            <h2>I am {user.name}</h2>

            { 
                isEmailVisible == true 
                ?<p className='fs-4 text-white'>jesus.martinez67@sdgku.edu</p>
                :<p>Click the button bellow to see my email address.</p>
            }
            <button className="btn btn-light text-primary me-4" onClick={(hideEmail)}><IconMailOff />Hide my email</button>
            <button className="btn btn-light text-primary" onClick={(showEmail)}><IconMail />Show my email</button>
        </div>
    )
}

export default About;