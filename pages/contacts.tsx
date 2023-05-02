import { FC } from 'react'


interface StringsProps {
    
}


const slice = function(str:string)
    {
        if (str.startsWith("ЕГЭ") || str.startsWith("ОГЭ"))
            return str.slice(6)
        else 
            return str
    }

const str = 'ЕГЭ - Математика';

const res = slice(str);



const strings:string[] = ['ЕГЭ - Математика', 'ИзиЕГЭ - Математика', 'ЕГЭ - Русский язык', 'ЕГЭ - Физика', 'ЕГЭ - Информатика']

const Strings: FC<StringsProps> = () => {
    return (
        <>
            {strings.map(str =>
                str.startsWith("ЕГЭ")
                    ? 
                    <p>{str.slice(6)}</p>
                    :
                    <p>{str}</p>
            )}
        </>
    );
}
 
export default Strings;