//teste vetor
var cantor = "morat";
var musica;

musicas()

function escolheBanda(cantante){
    cantor = cantante;
    musicas()
}

//Metodo fetch() para buscar o arquivo dados.json transformando o resultado em um objeto usando o metodo response.json()
function musicas(){
    fetch('dados.json')
    .then(response => response.json())
    .then(corpo => {
        
        document.getElementById("categoria").innerHTML="Musicas"

        var areasMusicas = ['musica1', 'musica2', 'musica3']
        var moratMusicas = [corpo.moratMusica1, corpo.moratMusica2, corpo.moratMusica3];
        var timoMusicas = [corpo.timoMusica1, corpo.timoMusica2, corpo.timoMusica3];
        var charlieRoddMusicas = [corpo.CharlieRoddMusica1, corpo.CharlieRoddMusica2, corpo.CharlieRoddMusica3];
        
        //acessando os dados do objeto json e adicionando ao HTML dentro de um elemento div usando a propriedade innerHTML(Front-End)
        if(cantor == "morat"){
            for(x=0; x<moratMusicas.length; x++){
                document.getElementById(areasMusicas[x]).innerHTML = moratMusicas[x].image+"<p>"+moratMusicas[x].name+"</p><p>"+moratMusicas[x].music+"</p><p>"+moratMusicas[x].albun+"</p><p>"+moratMusicas[x].style+"</p><p>"+moratMusicas[x].price+"</p>";
            }
        }
        if(cantor == "timo"){
            for(x=0; x<timoMusicas.length; x++){
                document.getElementById(areasMusicas[x]).innerHTML = timoMusicas[x].image+"<p>"+timoMusicas[x].name+"</p><p>"+timoMusicas[x].music+"</p><p>"+timoMusicas[x].albun+"</p><p>"+timoMusicas[x].style+"</p><p>"+timoMusicas[x].price+"</p>";
            }
        }
        if(cantor == "CharlieRodd"){
            for(x=0; x<charlieRoddMusicas.length; x++){
                document.getElementById(areasMusicas[x]).innerHTML = charlieRoddMusicas[x].image+"<p>"+charlieRoddMusicas[x].name+"</p><p>"+charlieRoddMusicas[x].music+"</p><p>"+charlieRoddMusicas[x].albun+"</p><p>"+charlieRoddMusicas[x].style+"</p><p>"+charlieRoddMusicas[x].price+"</p>";
            }
        }
    })
}