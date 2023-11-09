import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-[#FCF5ED] flex justify-center">
                <div className='container grid grid-cols-2 text-[#1F1717]'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Boas vindas!
                        </h2>
                        <p className='text-xl'>
                            Deixe aqui suas reflexões e visões pessoais: 
                        </p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/84Cbtmh.png"
                            alt="Imagem página Home. Imagem por Tailor Brands."
                            className='w-2/3'
                        />
                    </div> 
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home