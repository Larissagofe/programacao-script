// function desafio(){
//     const num = [1,2,3,4,5,6,7,8,9,10];
//     const result = num.map((num) => num);
//     return(
//         <span>result</span>
//     )
// }

function gerarlista(valor = 10){
    let lista = [];
    for(let i = 0;  i <= valor; i++){
        lista.push(<span>{i}</span>)
    }
    return lista;
}

export default function retorno(){
    return(
        <>
            {gerarlista()}
        </>
    )
}