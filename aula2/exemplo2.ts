namespace exemplo2 {
    let vetor: number[] = [1, 2, 3, 4, 5];
    // console.log(vetor);
    let resultadoSoma: number[] = [];
    
    for (let i = 0; i < vetor.length; i++) {
        
        if (i == vetor.length -1 ){
            resultadoSoma.push(soma(vetor[i], vetor[0]));
        } else {
            let j: number = vetor[i] + 1;
            resultadoSoma.push(soma(vetor[i], j));
        }
    }
    console.log(resultadoSoma);
    // for (let i = 0; i < vetor.length; i++) {
    //     if (i == vetor.length - 1){
    //         resultadoSoma.push(soma(vetor[i], vetor[0] + 1));
    //     } else {
    //         resultadoSoma.push(soma(vetor[i], vetor[i] + 1));
    //     }
        
    //     console.log(resultadoSoma);
    // }
    
    // //pop, push, shift, unshift
}

function soma(a: number, b: number){
    let result: number = a + b;
    return result;
}