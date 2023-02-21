function Letras(props) {

    const { habilitarLetra, letraSelecionada } = props;

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="container-inferior">
            {alfabeto.map((letra) =>
                <button
                    disabled={habilitarLetra === "letra-desabilitada" ? true : false}
                    className={habilitarLetra}
                    onClick={() => letraSelecionada(letra)}
                    data-test="letter"
                >
                    {letra}
                </button>)}
        </div>
    )
}

export default Letras;