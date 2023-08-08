function Titulo({nome, paragrafo}) {
   return (
   <div>
       <h1>hello world</h1>
       {paragrafo ?
       <p>essa é um introdução á React pôr {nome ? nome : "fulano"}</p>
       :
       <p>não tem um paragrafo aqui</p>
       }
   </div>
   )
}

//o nome desse {nome} é  'props'

//também é possível usar uma condição ternária, 'se tiver {nome} mostra nome,
//se não mostra 'outra coisa'
//{nome ? nome : "fulano"}



// {paragrafo ?
// <p>essa é um introdução á React pôr {nome ? nome : "fulano"}</p>
// :
// <p>não tem um paragrafo aqui</p>
// }
// essa condição ternária serve dizer, se paragrafo igual a true, mostra o paragrafo
// se for false mostra 'não tem um paragrafo aqui'
 


export default Titulo