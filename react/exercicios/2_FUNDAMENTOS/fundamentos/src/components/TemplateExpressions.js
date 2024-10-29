const TemplateExpressions = () => {
    const name = "Drs"
    const data = {
        age: 24,
        job: 'programer',
    }
    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Voce atua em {data.job}</p>
            <p>{8 + 8}</p>
        </div>
    )
}

export default TemplateExpressions