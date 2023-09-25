import { z } from 'zod'
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { useNavigate, Link } from 'react-router-dom';
import { ButtonForm } from '../../components/buttons/buttonsDesign';

const createLoginSchema = z.object({
    nome: z.string()
        .nonempty('O usuário é obrigatório'),
    password: z.string()
     .nonempty('A senha é obrigatória')

     .min(6 , 'A senha deve conter ao menos 6 caractéres '),
    email: z.string() 
    .nonempty('O Email é obrigatório'),
    cpf: z.string()
    .nonempty('O CPF é obrigatório'),
    nascimento: z.string()
        .nonempty('A data de nascimento é obrigatória'),
})

type CreateUseFormData = z.infer<typeof createLoginSchema> 

const CadastroScreen = () => {

    const navigate = useNavigate();

    const handleLogin = ({data}:any) => {
        if(errors.nome || errors.password){
            return
        } 
        navigate('/home')
        fetch('https://api.sheetmonkey.io/form/dSdxVmi3i4yyZagmh7p2WE', {
            method:'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data, null, 2)
        })
    }

    const {register, formState:{errors}, handleSubmit} = useForm<CreateUseFormData>({
        resolver: zodResolver(createLoginSchema),
    });  


    return(
        <>  
        <h1 className="text-3xl font-bold">FAÇA SEU CADASTRO</h1>
        <form
        className="flex flex-col w-3/4 gap-3 justify-center items-center" 
        onSubmit={handleSubmit(handleLogin)}
        action="">
            <label 
            className="w-full"
            htmlFor=""> 
                <input 
                className="p-2 text-base outline-none bg-slate-100 w-full "
                placeholder="Nome"
                type="text"
                {...register('nome')} />
                
            </label>
            {errors && <span>{errors.nome?.message}</span>}
           <div className='flex gap-2 w-full'>
           <label
             htmlFor=""
             className='w-1/2'> 
                <input
                className="p-2 text-base outline-none bg-slate-100 w-full"
                placeholder="Senha" 
                type="password"
                {...register('password')} />
            </label>
            {errors && <span>{errors.password?.message}</span>} <label
             htmlFor=""
             className='w-1/2'> 
                <input
                className="p-2 text-base outline-none bg-slate-100 w-full "
                placeholder="Confirmar a senha" 
                type="password"
                {...register('password')} />
            </label>
            {errors && <span>{errors.password?.message}</span>}
           </div>
           <div className='flex gap-2 w-full'>
            <label 
            className='w-1/3'
            htmlFor=""> 
                <input 
                className="p-2 text-base outline-none bg-slate-100 w-full "
                placeholder="Email"
                type="text"
                {...register('email')} />  
                {errors && <span>{errors.email?.message}</span>}              
            </label>
            
            <label 
            className='w-1/3'
            htmlFor=""> 
                <input 
                className="p-2 text-base outline-none bg-slate-100 w-full "
                placeholder="CPF"
                type="text"
                {...register('cpf')} />
                {errors && <span>{errors.cpf?.message}</span>}
            </label>
            <label 
            className='w-1/3'
            htmlFor=""> 
                <input 
                className="p-2 text-base outline-none bg-slate-100 w-full "
                placeholder="Data de nascimento"
                type="text"
                {...register('nascimento')} />
                {errors && <span>{errors.nascimento?.message}</span>}
            </label>
            </div>
            <ButtonForm text='Cadastrar'/>
        </form>
        <Link to={'/login'}>Ja possuí cadastro ?</Link>
        </>

    )
}

export default CadastroScreen;