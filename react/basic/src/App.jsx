import Titulo from "./Titulo"

function App(){
  return (
    <div>
      <Titulo paragrafo={false}/>
      <Titulo nome ="pablo" />
    </div>
  )
}

//deixe '/' colada com o '>' se não dá erro

//a função App é um componente

//componentes geralmente são funções

//componentes são como o nome já dá a entender, trechos de código que podem ser chamados em diferentes arquivos
//o que é uma  boa  prática

//componentes tem q ter as primeiras letras maiúsculas

//para chamar mais de um componente é preciso abrir um parenteses depois de return
//e então abrir uma div e ai colocar as tags componentes

//sempre que for usar mais de um conteúdo dentro do componente deve se
//usar div dentro de parenteses

export default App

//após criado é preciso exporta-lo para q este seja chamado em outro arquivo