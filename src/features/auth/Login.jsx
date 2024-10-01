import { Link } from 'react-router-dom';
import './../../style/features/LoginStyle.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Login() {
const {register,handleSubmit,watch,formState:{errors}}=useForm()
const Navigate = useNavigate()
 const onSubmit =(data)=>{
    if (data) {
        Navigate('/Dashboard')
        console.log(data)
    }else{
        return 'Hubo un error'
    }

};
    return (
        <>
            <div id="BGlogin" className="flex flex-col items-center justify-center min-h-screen">

                <div className="bg-orange-500 text-white w-full p-12 md:w-1/2 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold mb-6">BIENVENIDO A FERRICO 🛠️</h1>
                    <p className="text-lg">Tu ferretería de confianza para todas tus necesidades</p>
                </div>

                <div className="bg-white p-8 md:w-1/2 w-full flex items-center justify-center shadow-md rounded-md" 
                onSubmit={handleSubmit(onSubmit)}>
                    <form className="flex flex-col items-center justify-center w-full max-w-md">
                        <label className="mb-4 w-full">UserName <span className='text-red-600'>*</span></label>
                        <input type="text" name='UserName' className="mb-2 p-2 border border-gray-300 rounded-md w-full"  {...register('UserName',{required:true})}/>
                       
                        {errors.UserName && (<span role='alert' className='text-red-600 '>este campo es requerido</span>)}
                       
                        <label className="mb-4 w-full">Password <span  className='text-red-600'>*</span></label>
                        <input type="password" name='UserPassword' className="mb-2 p-2 border border-gray-300 rounded-md w-full" {...register('UserPassword',{required:true,maxLength:8})}/>
                       
                        {errors.UserPassword && (<span role='alert' className='text-red-600 p-0'>solo se acepta 8 digitos </span>)}
                       
                        <button type="submit" className='w-full bg-orange-500 text-white p-2 rounded-md'>Iniciar sesión</button>
                    </form>     
                </div>
            </div>
        </>
    );
}

export default Login;
