import { faMusic, faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Titulo(){
    return(
        <div className="row encabezado p-2 colorzila">
            <div className="col-md-12">
                <span className="m-2"><FontAwesomeIcon icon={faVolumeUp}/></span>
                <span>NoiseLess</span>
                <span className="m-2"><FontAwesomeIcon icon={faVolumeUp}/></span>

            </div>
        </div>
    );
}


export default Titulo;