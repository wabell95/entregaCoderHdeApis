import Contador from "./contador"

const Heroe = props => {
    return (<>
        <div className="col-4">
            <div key={props.indice} className="card">
                <div className="card-body">
                    <p className="card-text">
                      superheroe:  <strong>{props.pheroe.superhero}</strong> <br></br>
                      alter ego:   <strong>{props.pheroe.alter_ego}</strong>
                      <Contador></Contador>
                    </p>
                </div>
            </div>
        </div>
    </>


    )
}
export default Heroe