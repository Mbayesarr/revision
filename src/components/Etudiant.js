
const Etudiant = ({id, nom, niveau , photo, enDelete}) => {
    return (
        <div>
            <li className="list-group-item text-align-center">
                    <img src={photo} width={200} alt="..."/>
                    <h3>{nom}</h3>
                    <h3>{niveau}</h3>
                    <buton className="btn btn-danger" 
                    onClick={()=>enDelete(id)}>Supprimer</buton>
            </li>
        </div>

    )
}

export default Etudiant
