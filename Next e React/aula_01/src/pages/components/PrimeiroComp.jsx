export default function PrimeiroComponente(props){ // deve ter letra maiuscula // props são os parametros de propriedades
    return(
        //considera que todos os itens são um só
        <>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </>
    )
}