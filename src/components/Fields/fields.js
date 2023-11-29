import '../Fields/fields.css'

const Fields = () => {
    const pix = "19995351311"
    const Fields = [
        { id: 1, urlNome: 'Whatsapp', icon: 'bi bi-whatsapp', url: 'https://api.whatsapp.com/send/?phone=5519995351311&text=Ol%C3%A1+gostaria+de+solicitar+um+or%C3%A7amento.' },
        { id: 2, urlNome: 'Instagram', icon: 'bi bi-instagram', url: 'https://www.instagram.com/bechelli_boxe70kg/' },
        { id: 3, urlNome: 'Email', icon: 'bi bi-envelope', url: 'mailto:bechellidev@gmail.com' },
    ]

    const ListFields = Fields.map((props) =>
        <div key={props.id} className='conteudo_links'>
            <a href={props.url} target='_blank'><i className={props.icon} />{props.urlNome}</a>
        </div>
        

    )

    return (
        <>
            {ListFields}
            <a style={{maxWidth: 735}} className='conteudo_links' onClick={() => {
                navigator.clipboard.writeText(pix);
            }}><i class="bi bi-clipboard"></i>Chave Pix</a>
            <p style={{ textAlign: 'center', color: '#fff' }}>Desenvolvido por BechelliDev - 2023</p>
        </>
    )
}

export default Fields;