function Tools(){

    const nome = "Pablo";
    let idade = 20;  

    //apesar de ser mais simples usar java e html, ainda é preferível
    //que o java esteja fora do html
    
    //mas o processo de chamá lo é quase o mesmo, {var/const} e pronto!

    return (
        <div>
            <p>
                olá meu nome é {nome}, tenho {idade} anos
            </p>
        </div>
    )
}

export default Tools