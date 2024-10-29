const UserDetails = ({ name, idade, profissao }) => {
  return (
    <div>
    <h3>{name}</h3> 
    <p>Idade: {idade}</p>
    <p>Profissão: {profissao}</p>

    <p>{idade ? (idade >= 18 ? 'Pode tirar CNH' : 'Não Pode tirar CNH') : 'Idade não fornecida'}</p>

    </div>
  )
}

export default UserDetails