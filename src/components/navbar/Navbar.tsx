import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PencilSimpleLine, Cards, Plus, User, SignOut } from '@phosphor-icons/react';

import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)
  
    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso!')
        navigate('/login')
    }

    return(
        <div className='w-full bg-[#CE5A67] text-white
                flex justify-center py-4'>

                <div className='container flex justify-between text-lg'> 
                    <Link to='/home' className='text-2xl font-bold'>Escritos Virtuais</Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline' title="Postagens"><PencilSimpleLine size={27} /></Link>
                        <Link to='/temas' className='hover:underline' title="Temas"><Cards size={27} /></Link>
                        <Link to='/cadastroTema' className='hover:underline' title="Novo Tema"><Plus size={27} /></Link>
                        <Link to='/' className='hover:underline' title="Usuário"><User size={27} /></Link>
                        <Link to='' onClick={logout} className='hover:underline' title="Sair"><SignOut size={27} /></Link>
                    </div>
                </div>
            </div>
    )
}

export default Navbar