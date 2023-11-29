import '../Header/header.css'


const Header = () => {
    return (
        <div className="perfil_conteudo">
            <div className='card_describe'>
                <div className="perfil_imagem" />
                <div className='text'>
                    <h3 style={{ fontSize: 20 }}>BECHELLIDEV</h3>
                    <p style={{fontWeight: 'bold'}}>Desenvolvedor Freelancer</p>
                    <p>Somos especializados em desenvolvimento tecnológico para seu negócio. Buscamos melhorar e automatizar processos
                        massantes tornando-os simples e práticos, melhorar o modo como sua empresa é vista trabalhando no marketing digital e desenvolvimento
                        de marca.</p>
                    <p>Principais serviços: </p>
                    <div className='services'>
                    - Desenvolvimento de Sites <br />
                    - Desenvolvimento de Sistemas Web <br />
                    - Desenvolvimento de aplicativos Mobile <br />
                    - Marketing Digital em redes sociais <br />
                    - Artes e design gráfico
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;