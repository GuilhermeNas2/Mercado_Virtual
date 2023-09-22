import { z } from 'zod'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { useState } from 'react';

    const createLoginSchema = z.object({
        nome: z.string()
            .nonempty('O usuário é obrigatório'),
        password: z.string()
         .nonempty('A senha é obrigatória')

         .min(6 , 'A senha deve conter ao menos 6 caractéres ')
    })

    type CreateUseFormData = z.infer<typeof createLoginSchema>

    

const LoginScreen = () => {

    const [output, setOutput] = useState('')

    const {register, formState:{errors}, handleSubmit} = useForm<CreateUseFormData>({
        resolver: zodResolver(createLoginSchema),
    });  

    const loginSubmit = (data: any) => {
        setOutput(JSON.stringify(data, null,2))
    }


    return(        
        <div className="flex">
            <div className=" w-1/2 h-screen bg-sky-200 flex items-center justify-center gap-5 flex-col">                
                  <h1                 
                  className="text-3xl font-semibold ">Seja bem vindo</h1>                
                <img src="icon1.png" alt="" />           
            </div>
            <div className="w-1/2 h-screen flex flex-col p-2 justify-center gap-10 items-center shadow-2xl bg-sky-100 ">
                <h1 className="text-3xl font-bold">FAÇA SEU CADASTRO</h1>
                <form
                className="flex flex-col w-3/4 gap-3 justify-center items-center" 
                onSubmit={handleSubmit(loginSubmit)}
                action="">
                    <label 
                    className=""
                    htmlFor=""> 
                        <input 
                        className="p-2 text-base outline-none bg-slate-200 "
                        placeholder="Usuário"
                        type="text"
                        {...register('nome')} />
                    </label>
                    <label htmlFor=""> 
                        <input
                        className="p-2 text-base outline-none bg-slate-200 "
                        placeholder="Senha" 
                        type="password"
                        {...register('password')} />
                    </label>
                    <button className="border-none w-1/4 bg-green-600 mt-5 h-10 text-lg font-semibold"
                    type='submit'>Login</button>
                </form>
                {errors && <span>{errors.nome?.message}</span>}
            </div>
        </div>
    )
}

export default LoginScreen;