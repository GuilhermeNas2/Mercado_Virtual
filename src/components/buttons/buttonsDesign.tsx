
interface ButtonProps {
    text: string;
}

export const ButtonForm = ({text}: ButtonProps) => {

    return(
        <button className="border-none w-1/4 bg-yellow-400 mt-5 h-10 text-lg font-semibold"
            type='submit'
            >{text}</button>
    )
};