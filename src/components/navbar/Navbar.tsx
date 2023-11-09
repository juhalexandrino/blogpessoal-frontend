import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PencilSimpleLine, Cards, Plus, User, SignOut } from '@phosphor-icons/react';


import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta';

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)
  
    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso!', "info")
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== ""){

        component = (

        <div className='w-full bg-[#CE5A67] text-white
                flex justify-center py-4'>

                <div className='container flex justify-between text-lg'> 
                    <Link to='/home' className='text-2xl font-bold'>Escritos Virtuais</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline' title="Postagens"><PencilSimpleLine size={27} /></Link>
                        <Link to='/temas' className='hover:underline' title="Temas"><Cards size={27} /></Link>
                        <Link to='/cadastroTema' className='hover:underline' title="Novo Tema"><Plus size={27} /></Link>
                        <Link to='/perfil' className='hover:underline' title="Usuário"><User size={27} /></Link>
                        <Link to='' onClick={logout} className='hover:underline' title="Sair"><SignOut size={27} /></Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <>
        { component }
        </>
    )
}

export default Navbar