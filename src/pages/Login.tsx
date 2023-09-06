import {auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const singInWithGoogle = async() => {
        const result = await signInWithPopup(auth, provider)
        console.log(result)
        navigate('/');
    };

    return (
        <div> 
            <p> Sign In with Google to Continue </p> 
            <button onClick={singInWithGoogle}> Sign In with Google </button>
        </div>
    )
}

export default Login