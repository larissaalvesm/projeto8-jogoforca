function Letras(props) {

    const { habilitarTodasLetras, letraSelecionada, letrasSelecionadas } = props;

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="container-inferior">
            {alfabeto.map((letra) =>
                <button
                    key={letra}
                    disabled={habilitarTodasLetras === "letra-desabilitada" || letrasSelecionadas.includes(letra) ? true : false}
                    className={letrasSelecionadas.includes(letra) ? "letra-desabilitada" : habilitarTodasLetras}
                    onClick={() => letraSelecionada(letra)}
                    data-test="letter"
                >
                    {letra}
                </button>)}
        </div>
    )
}

export default Letras;