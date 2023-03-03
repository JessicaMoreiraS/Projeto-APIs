const jsonP1 =  '{"nome":"Maria", "cpf":"123","idade":20,"escolaridade":"Médio completo", "profissao":"desenvolvedora Back End", "imagem": "imagens/perfil1.jpg"}';
const informacaoP1 = JSON.parse(jsonP1);
const jsonP2 =  '{"nome":"James", "cpf":"321","idade":25,"escolaridade":"tecnico completo", "profissao":"Empresario", "imagem": "imagens/perfil2.jpg"}';
const informacaoP2 = JSON.parse(jsonP2);
const jsonP3 =  '{"nome":"Carla", "cpf":"987","idade":40,"escolaridade":"Superior completo", "profissao":"Professora", "imagem": "imagens/perfil3.jpg"}';
const informacaoP3 = JSON.parse(jsonP3);

console.log(informacaoP1, informacaoP2, informacaoP3); //teste

const vetor = [
    informacaoP1,
    informacaoP2,
    informacaoP3
]
console.log(vetor[0]); //teste

//paragrafos com informacoes
const areaNome = document.getElementById("nome");
const areaCpf = document.getElementById("cpf");
const areaIdade = document.getElementById("idade");
const areaEscolaridade = document.getElementById("escolaridade");
const areaProfissao = document.getElementById("profissao");
const areaImagem = document.getElementById("imagem");

//Botao Buscar
function buscar() {
    const escolha = document.getElementById("escolha").value;
    var informacao;

    for(var i = 0; i<vetor.length; i++){
        if(escolha == vetor[i].cpf){
            console.log(vetor[i].cpf)
            informacao = vetor[i]; 

            document.getElementById("labelNome").innerHTML = "Nome: ";
            document.getElementById("labelCpf").innerHTML = "CPF: ";
            document.getElementById("labelIdade").innerHTML = "Idade: ";
            document.getElementById("labelEscolaridade").innerHTML = "Escolaridade: ";
            document.getElementById("labelProfissao").innerHTML = "Profissão:";
            document.getElementById("imagem").innerHTML = "Profissão:";

            areaNome.innerHTML= informacao.nome;
            areaCpf.innerHTML= informacao.cpf;
            areaIdade.innerHTML= informacao.idade;
            areaEscolaridade.innerHTML= informacao.escolaridade;
            areaProfissao.innerHTML= informacao.profissao;
            areaImagem.innerHTML= "<img src="+informacao.imagem+"></img>";
            return;
        }else{
            if(i==vetor.length-1){
                document.getElementById("labelNome").innerHTML = "";
                document.getElementById("labelCpf").innerHTML = "";
                document.getElementById("labelIdade").innerHTML = "";
                document.getElementById("labelEscolaridade").innerHTML = "";
                document.getElementById("labelProfissao").innerHTML = "";

                areaNome.innerHTML = "sujeito não encontrado"
                areaCpf.innerHTML= "";
                areaIdade.innerHTML= "";
                areaEscolaridade.innerHTML= "";
                areaProfissao.innerHTML= "";
                areaImagem.innerHTML= "";
                return;
            }
        }
    }
}

function limpar(){
    document.getElementById("labelNome").innerHTML = "";
    document.getElementById("labelCpf").innerHTML = "";
    document.getElementById("labelIdade").innerHTML = "";
    document.getElementById("labelEscolaridade").innerHTML = "";
    document.getElementById("labelProfissao").innerHTML = "";
    
    escolha.value="";

    areaNome.innerHTML = null;
    areaCpf.innerHTML= "";
    areaIdade.innerHTML= "";
    areaEscolaridade.innerHTML= "";
    areaProfissao.innerHTML= "";
    areaImagem.innerHTML= "";
    return;
}









    /*console.log(escolha);
    if(escolha == informacaoP1.cpf){
        informacao = informacaoP1; 
    }else{
        if(escolha == informacaoP2.cpf){
            informacao = informacaoP2;
        }else{
            if(escolha == informacaoP3.cpf){
                informacao = informacaoP3
            }else{
                areaNome.innerHTML = "sujeito não encontrado"
                areaCpf.innerHTML= "";
                areaIdade.innerHTML= "";
                areaEscolaridade.innerHTML= "";
                areaProfissao.innerHTML= "";
                return;
            }
        }
    }
        areaNome.innerHTML= informacao.nome;
        areaCpf.innerHTML= informacao.cpf;
        areaIdade.innerHTML= informacao.idade;
        areaEscolaridade.innerHTML= informacao.escolaridade;
        areaProfissao.innerHTML= informacao.profissao;*/