import { useState } from "react";
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import Letras from "./Letras";

function Jogo(props) {

    const { palavras } = props;

    const [habilitarTodasLetras, setHabilitarTodasLetras] = useState("letra-desabilitada");
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
    const [palavraSorteada, setPalavraSorteada] = useState("");
    const [palavra, setPalavra] = useState([]);
    const [numErros, setNumErros] = useState(0);
    const [imgForca, setImgForca] = useState(forca0);
    const [palavraRevelada, setPalavraRevelada] = useState("");

    function escolherPalavra() {
        setLetrasSelecionadas([]);
        setNumErros(0);
        setImgForca(forca0);
        setPalavraRevelada("");
        setHabilitarTodasLetras("letra-habilitada");

        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        const novaPalavra = palavras[indiceAleatorio];
        setPalavraSorteada(novaPalavra);

        const palavraSorteadaEscondida = [];

        for (let i = 0; i < novaPalavra.length; i++) {
            palavraSorteadaEscondida.push("_ ");
        }
        setPalavra(palavraSorteadaEscondida);
    }

    function letraSelecionada(letra) {
        console.log(letra);
        const novasLetrasSelecionadas = [...letrasSelecionadas, letra];
        setLetrasSelecionadas(novasLetrasSelecionadas);
        console.log(letrasSelecionadas);
        const letraMin = letra.toLowerCase();
        const palavraPreenchida = [];

        if (palavraSorteada.includes(letraMin)) {

            for (let i = 0; i < palavraSorteada.length; i++) {
                if (palavraSorteada[i] === letraMin) {
                    palavraPreenchida.push(letraMin);
                } else if (palavra[i] !== "_ ") {
                    palavraPreenchida.push(palavraSorteada[i]);
                } else {
                    palavraPreenchida.push("_ ");
                }
            }
            setPalavra(palavraPreenchida);

            if (!palavraPreenchida.includes("_ ")) {
                setHabilitarTodasLetras("letra-desabilitada");
                setPalavraRevelada("verde");
            }

        } else {
            let novoNumErros = numErros + 1;
            let novaImgForca = pegarImagemForca(novoNumErros);

            if (novoNumErros < 6) {
                setNumErros(novoNumErros);
                setImgForca(novaImgForca);
            } else if (novoNumErros = 6) {
                setNumErros(novoNumErros);
                setImgForca(novaImgForca);
                setHabilitarTodasLetras("letra-desabilitada");
                setPalavra(palavraSorteada);
                setPalavraRevelada("vermelho");
            }
        }
    }

    function pegarImagemForca(erros) {
        switch (erros) {
            case 1:
                return forca1;
            case 2:
                return forca2;
            case 3:
                return forca3;
            case 4:
                return forca4;
            case 5:
                return forca5;
            case 6:
                return forca6;
        }
    }

    return (
        <div className="container">
            <div className="container-superior">
                <img src={imgForca} alt="forca-inicial" data-test="game-image" />
                <div className="container-direita">
                    <button disabled={palavra.length === 0 || palavraRevelada !== "" ? false : true} onClick={escolherPalavra} data-test="choose-word">Escolher Palavra</button>
                    <div className={`palavra-escolhida ${palavraRevelada}`} data-test="word">{palavra}</div>
                </div>
            </div>
            <Letras habilitarTodasLetras={habilitarTodasLetras} letraSelecionada={letraSelecionada} letrasSelecionadas={letrasSelecionadas} />
        </div>
    )
}
export default Jogo;