import { toast } from 'react-toastify';

export function toastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {
            
        case 'sucesso':
            toast.success(mensagem, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;

        case 'info':
            toast.info(mensagem, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;

        case 'erro':
            toast.error(mensagem, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;

        default:
            toast.info(mensagem, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'light',
                progress: undefined,
            });
            break;
    }
}