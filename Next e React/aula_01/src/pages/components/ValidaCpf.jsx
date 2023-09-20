export default function ValidaCpf(props){
    // let text = props.cpf.length <= 11 ? 'Válido' : 'Inválido' ;

    // return(
    //     <>
    //         <h1>{text}</h1>
    //     </>
    // )

    let validacao = props.cpf;
    let countNumber = validacao.match(/\d/g); // expressão regular que verificar se existe numero
    let isValid;
    
    if(countNumber.length >= 11 ){
        isValid =  true;
    } else {
        isValid = false;
    }
    return (
        <>
            <p>{isValid ? 'Válido' : 'Inválido'}</p>
        </>
    )
}