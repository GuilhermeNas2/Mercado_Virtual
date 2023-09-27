import { z } from 'zod'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { Link, useNavigate } from 'react-router-dom';
import { ButtonForm } from '../../components/buttons/buttonsDesign';


const createLoginSchema = z.object({
    nome: z.string()
        .nonempty('O usuário é obrigatório'),
    password: z.string()
     .nonempty('A senha é obrigatória')
     .min(6 , 'A senha deve conter ao menos 6 caractéres ')
})

type CreateUseFormData = z.infer<typeof createLoginSchema>


const LoginScreenInit =  () => {

    const navigate = useNavigate();

    const handleLogin = async () => {
        if(errors.nome || errors.password){
            return
        }           
    navigate('/home')        
    }

    const {register, formState:{errors}, handleSubmit} = useForm<CreateUseFormData>({
        resolver: zodResolver(createLoginSchema),
    });  

    return(
        <>
         <h1 className="text-3xl font-bold">FAÇA SEU LOGIN</h1>
                <form      
                className="flex flex-col w-3/4 gap-3 justify-center items-center" 
                onSubmit={handleSubmit(handleLogin)}
                >
                    <label> 
                    <input 
                    className="p-2 text-base outline-none bg-slate-100 "
                    placeholder='Usuário'
                    type='text'
                    {...register('nome')}
                    />                        
                   </label>
                    {errors && <span>{errors.nome?.message}</span>}                  
                    <label 
                    > 
                    <input 
                    className="p-2 text-base outline-none bg-slate-100 "
                    placeholder='Senha'
                    type='password'
                    {...register('password')} 
                    />                              
                    </label>
                    {errors && <span>{errors.password?.message}</span>}                    
                    <ButtonForm text='Login'/>
                </form>
                <Link to={'Mercado_Virtual/login/cadastro'}>Não tem cadastro ainda ?</Link>
        </>
    )
  
}

export default LoginScreenInit;