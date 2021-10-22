import React, { useState } from 'react'
import Etudiant from './Etudiant'

const ListEtudiants = () => {

    const [etudiants, setetudiants] = useState([{id: 1,nom: "Etudiant 1", niveau: "Niveau 1", photo :"./profil.jpeg"},
    {id: 2,nom: "Etudiant 2", niveau: "Niveau 1", photo :"./logo192.png"}])

    const deleteEtudiant =(idetudiant)=>{
        let newetudiant=[... etudiants]
        newetudiant=newetudiant.filter((t) => t.id !== idetudiant)  
        setetudiants([... newetudiant])

    }

    return (
        <div class="text-center">
            <header><h2 className="text-center">Liste Etudiants</h2>
                <div className="d-flex justify-content-center">
                    <input type="text" className="form-control w-50" placeholder="Username" />
                    <buton className="btn btn-success">Add+</buton>
                </div>
            </header>
            <hr />
            <input type="text" className="form-control w-50 mx-auto" placeholder="Recherche" /><br />
            <ul className="list-group">
                {etudiants.map((v)=><Etudiant 
                                    nom={v.nom}
                                    niveau={v.niveau}
                                    key={v.id}
                                    id={v.id}
                                    photo={v.photo}
                                    //enDelete={(id)=>alert(id)}
                                    enDelete={deleteEtudiant}
                                    />
                                    )}
            </ul>
        </div>

    )
}

export default ListEtudiants
