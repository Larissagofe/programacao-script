import ValidaCpf from "./components/ValidaCpf";
import PrimeiroComponente from "./components/primeirocomp";

export default function AulaComp(){
    return (
        <>
            <PrimeiroComponente
                titulo="Meu primeiro componente"
                subtitulo="Estamos aprendendo NEXT.js com REACT"
            />

            <ValidaCpf
                cpf="44394219892"
            />
        </>
    )
}