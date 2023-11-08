import { Link } from "react-router-dom";
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#CE5A67] text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Escritos Virtuais | Copyright {data}
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais:</p>
                    <div className='flex gap-2'>
                    <Link to='https://github.com/juhalexandrino' target="_blank" title="GitHub" className='hover:opacity-70'><GithubLogo size={27} /></Link>
                    <Link to='https://www.linkedin.com/in/juliaalexandrino/' target="_blank" title="LinkendIn" className='hover:opacity-70'><LinkedinLogo size={27} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer