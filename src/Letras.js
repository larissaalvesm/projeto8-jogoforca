function Letras() {

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return (
        <div className="container-inferior">
            {alfabeto.map((letra) => <button type="button" disabled className="letra-desabilitada">{letra}</button>)}
        </div>
    )
}

export default Letras;