import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

import { buscar } from '../../../services/Service';
import { AuthContext } from '../../../contexts/AuthContext';

import Postagem from '../../../models/Postagem';
import CardPostagens from '../cardPostagens/CardPostagens';

function ListaPostagens() {

    const navigate = useNavigate();

    const [postagens, setPostagens] = useState<Postagem[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarPostagens() {
        try {
            await buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('Token expirado. Por favor, faça login novamente!')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado para utilizar essa funcionalidade.')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [postagens.length])

    return (       <>
        {postagens.length === 0 && (
            <div className='flex justify-center w-full absolute top-1/3'>
            <PropagateLoader
                color="#1F1717"
                cssOverride={{}}
                loading
                size={11}
                speedMultiplier={1}
            />
        </div>
        )}

        <div className='container mx-auto my-4 
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {postagens.map((postagem) => (
                <CardPostagens key={postagem.id} post={postagem} />
            ))}

        </div>
    </>
)
}

export default ListaPostagens