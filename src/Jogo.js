import forca0 from "./assets/forca0.png"

function Jogo() {
    return (
        <div className="container">
            <div className="container-superior">
                <img src={forca0} alt="forca-inicial" />
                <button>Escolher Palavra</button>
            </div>
            <div className="container-inferior">
                <button>A</button>
                <button>B</button>
                <button>C</button>
                <button>D</button>
                <button>E</button>
                <button>F</button>
                <button>G</button>
                <button>H</button>
                <button>I</button>
                <button>J</button>
                <button>K</button>
                <button>L</button>
                <button>M</button>
                <button>N</button>
                <button>O</button>
                <button>P</button>
                <button>Q</button>
                <button>R</button>
                <button>S</button>
                <button>T</button>
                <button>U</button>
                <button>V</button>
                <button>W</button>
                <button>X</button>
                <button>Y</button>
                <button>Z</button>
            </div>
        </div>
    )
}
export default Jogo;