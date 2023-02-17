import { useState } from "react";
import forca0 from "./assets/forca0.png"
import Letras from "./Letras";

function Jogo(props) {

    const { palavras } = props;

    const [habilitarLetra, setHabilitarLetra] = useState("letra-desabilitada");
    const [palavra, setPalavra] = useState([]);

    function comparador() {
        return Math.random() - 0.5;
    }


    function escolherPalavra() {
        setHabilitarLetra("letra-habilitada");
        palavras.sort(comparador);
        console.log(palavras[0]);
        const palavraSorteada = [];

        for (let i = 0; i < palavras[0].length; i++) {
            palavraSorteada.push("_ ");
        }

        setPalavra(...palavra, palavraSorteada);

    }

    return (
        <div className="container">
            <div className="container-superior">
                <img src={forca0} alt="forca-inicial" />
                <div className="container-direita">
                    <button onClick={escolherPalavra}>Escolher Palavra</button>
                    <div className="palavra-escolhida">{palavra}</div>
                </div>
            </div>
            <Letras habilitarLetra={habilitarLetra} />
        </div>
    )
}
export default Jogo;