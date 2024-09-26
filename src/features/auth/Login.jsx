import { Link } from 'react-router-dom';
import './../../style/features/LoginStyle.css'

function Login() {
    return (
        <>
            <div id="BGlogin" className="flex flex-col items-center justify-center min-h-screen">

                <div className="bg-orange-500 text-white w-full p-12 md:w-1/2 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-6">BIENVENIDO A FERRICO 🛠️</h1>
                    <p className="text-lg">Tu ferretería de confianza para todas tus necesidades</p>
                </div>

                <div className="bg-white p-8 md:w-1/2 w-full flex items-center justify-center shadow-md rounded-md">
                    <form className="flex flex-col items-center justify-center w-full max-w-md">
                        <label className="mb-4 w-full">UserName <span className='text-red-600'>*</span></label>
                        <input type="text" className="mb-6 p-2 border border-gray-300 rounded-md w-full" />
                        <label className="mb-4 w-full">Password <span className='text-red-600'>*</span></label>
                        <input type="password" className="mb-6 p-2 border border-gray-300 rounded-md w-full" />
                        <Link className='w-full bg-orange-500 text-white p-2 rounded-md' to={'/Dashboard'}>
                        <button type="submit" className='w-full bg-orange-500 text-white p-2 rounded-md'>Iniciar sesión</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
