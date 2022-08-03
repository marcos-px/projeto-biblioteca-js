const musicas = require('./database')


//entrada do usuário para escolher a música por categoria

const readline = require('readline-sync')

const inputUsuario = readline.question('Quer buscar uma musica? S/N : ')

//Se for sim, mostrar as categorias para que ela escolha e pergunta qual ela quer.

if (inputUsuario.toLocaleUpperCase() == 'S') {
    console.log('Esses são os estilos musicais disponíveis : ');
    console.log('MPB', 'Internacional', 'Humor', 'Samba');

    const inputEstilo = readline.question('Qual estilo musical voce quer ver ? ');

    const acessar = musicas.filter(musica => musica.categoria === inputEstilo);

    console.table(acessar);
} else {
    const musicasOrdenadas = musicas.sort((a,b)=> a.audiencia - b.audiencia);
    console.log('Essas são todas as músicas disponíveis');
    console.table(musicasOrdenadas)
}

//se escolher não, mostrar todas as músicas em ordem crescente de views.

