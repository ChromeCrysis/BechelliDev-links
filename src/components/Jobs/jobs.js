import '../Fields/fields.css'

const Jobs = () => {
    const Jobs = [
        {id:1, jobName:'Desenvolvimento de Sites', descricao: 'Desenvolvimento de sites, e-commerces e landing pages sob demanda.'},
        {id:2, jobName:'Sistemas Web', descricao: ''},
        {id:3, jobName:'Aplicativos Mobile', descricao: ''},
        {id:4, jobName:'Criação de artes e logos', descricao: '19995351311'},
        {id:5, jobName:'SEO e Marketing Digital', descricao: '19995351311'}
    ]

    const ListJobs = Jobs.map((props) =>
        <div key={props.id} className='conteudo_links'>
            <a href={props.url} target='_blank'>{props.urlNome}</a>
        </div>
        
    )

    return(
        <>
        {ListFields}
        <p style={{textAlign: 'center', color: '#fff'}}>Desenvolvido por BechelliDev - 2023</p>
        </>
    )
}

export default Fields;