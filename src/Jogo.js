import forca0 from "./assets/forca0.png"
import Letras from "./Letras";

function Jogo() {
    return (
        <div className="container">
            <div className="container-superior">
                <img src={forca0} alt="forca-inicial" />
                <button>Escolher Palavra</button>
            </div>
            <Letras />
        </div>
    )
}
export default Jogo;