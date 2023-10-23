import './Home.css'

function Home() {
    return (
        <>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>boas vindas a minha página!</h2>
                        <p>esse é o meu primeiro projeto utilizando React.</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-working-on-project-5691620-4759502.png"
                            alt="Imagem da Página Home" 
                            width="420px"
                        />
                        <button><a href="https://github.com/juhalexandrino" target="_blank">conheça outros projetos no meu GitHub!</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home