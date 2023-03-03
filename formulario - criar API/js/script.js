//funcao para escolher apenas uma das checkbox no HTML
function escolherFeminino(){
    if(document.getElementById("sexoMasculino").checked == true){
        document.getElementById("sexoMasculino").checked = false
    }
}
function escolherMasculino(){
    if(document.getElementById("sexoFeminino").checked == true){
        document.getElementById("sexoFeminino").checked = false
    }
}

//funcoes para alerts fofo
function alertaCadastro(){
    swal({
        position: 'center',
        icon: 'success',
        title: 'Cadastro realizado com sucesso',
        timer: 1500,
        buttons: false,
      })
}
function alertaApagado(){
    swal({
        position: 'center',
        icon: 'success',
        title: 'Cadastro apagado com sucesso',
        timer: 1500,
        buttons: false,
      })
}
function alertaErro(){
    swal({
        icon: 'error',
        title: 'Oops...',
        text: 'digite um CPF valido',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}
function alertaVazio( frase){
    swal ({
      title: 'Ops,',
      text: frase,
      icon: 'warning',
      button: true,
      buttonColor: '#3085d6',
      cancelButtonColor: '#d33',
      buttonText: 'Yes, delete it!'
    })
}

//funcao para limpar o fomulario
function limparImputs(){
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("cargo").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("sexoFeminino").checked = false;
    document.getElementById("sexoMasculino").checked = false;
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}

//funcao para cadastrar e guardar jsons
var cadastrados = [];
 
function enviar(){
    if(document.getElementById("nome").value =="" || document.getElementById("sobrenome").value =="" || document.getElementById("cargo").value =="" ||
        document.getElementById("dataNascimento").value =="" || document.getElementById("cpf").value =="" || document.getElementById("telefone").value =="" ||
        document.getElementById("email").value =="" || document.getElementById("senha").value =="" ||
        document.getElementById("sexoFeminino").checked == false && document.getElementById("sexoMasculino").checked == false){
        frase = "Preencha todos os campos"
        alertaVazio(frase)
        return;
    }
    if(document.getElementById("sexoFeminino").checked == true){
        var sexo = document.getElementById("sexoFeminino").value
    }else{
        var sexo = document.getElementById("sexoMasculino").value
    }

    var pessoa = new Object;
    pessoa.nome= document.getElementById("nome").value;
    pessoa.sobrenome= document.getElementById("sobrenome").value;
    pessoa.cargo= document.getElementById("cargo").value;
    pessoa.dataNascimento= document.getElementById("dataNascimento").value;
    pessoa.cpf= document.getElementById("cpf").value;
    pessoa.sexo= sexo;
    pessoa.telefone= document.getElementById("telefone").value;
    pessoa.email= document.getElementById("email").value;
    pessoa.senha= document.getElementById("senha").value;

    //Verifica se o cpf já foi cadastrado
    for(x=0; x<cadastrados.length; x++){
        if(cadastrados[x].cpf == pessoa.cpf){
            alertaVazio("Esse CPF já está cadastrado")
            return;
        }
    }


    var jsonForm = JSON.stringify(pessoa.valueOf());

    const informacaoPessoa = JSON.parse(jsonForm);

    cadastrados.push(informacaoPessoa);
    console.log(informacaoPessoa)

    alertaCadastro()
    limparImputs()
}

//funcao para apagar o cadastro pesquisado
function apagarCadastro(i){
    mostrar.innerHTML = "";
    cadastrados.splice(i,1)
    document.getElementById("cpfBuscar").value = "";
    alertaApagado()
}

//funcao para buscar jsons de pessoas ja cadastradas e fazer com que as informacoes e a opcao de impressao aparecao para o usuario
function buscar(){
    var cpfBuscar= document.getElementById("cpfBuscar").value;
    console.log(cpfBuscar)
    
    for(i=0; i<cadastrados.length; i++){
        if(cadastrados[i].cpf == cpfBuscar){
            console.log('CPF encontrado')
            mostrar.innerHTML = "<div id='dados'><h3>Informações</h3><p>Nome: "+cadastrados[i].nome+"</p><p>Sobrenome: "+cadastrados[i].sobrenome+"</p><p>Cargo: "+cadastrados[i].cargo+"</p><p>Data de nascimento: "+cadastrados[i].dataNascimento+"</p><p>CPF: "+cadastrados[i].cpf+"</p><p>Sexo: "+cadastrados[i].sexo+"</p><p>Telefone: "+cadastrados[i].telefone+"</p><p>E-mail: "+cadastrados[i].email+"</p></div><div class='form'><button type='button' value='Imprimir Dados' onClick='window.print()' id='btnImprimir'>Imprimir Dados</button> <button value='Apagar Dados' onClick='apagarCadastro("+i+")' id='btnApagar'>Apagar Dados</button></div>"
            return;
        }else{
            if(i==cadastrados.length-1){
                console.log('CPF não cadastrado')
                mostrar.innerHTML = "";
                alertaErro()
            }
        }
    }
    if(cadastrados.length == 0){
        console.log('CPF não cadastrado')
        mostrar.innerHTML = "";   
        frase = "Ainda não há CPF cadastrados ";
        alertaVazio(frase)
    }
}


//funcao para acessar area doa dministrador
function acessarAdministrador(){
    swal("Digite a senha para ter acesso:", {
        content: {
            element: "input",
            attributes: {
              placeholder: "A senha pré cadastrada é 963",
              type: "password",
            },
          },
        //content: "input",
      })
      .then((value) => {
        if(value == 963){
            mostrarEstatisticas()
        }else{
            swal(`Senha incorreta`)
        };
    });
}


function mostrarEstatisticas(){
    var numHomens=0;
    var numMulheres=0;
    var vetorDeCargos = ['']
    var vetorNumCargos = [''];
    var somaDeIdades = 0;
    var mediaDeIdades = 0;
    var primeiro=false;
    var existe = false;
    areaParaExibir= document.getElementById('areaEstatisticas')
    
    for(a=0; a<cadastrados.length; a++){
        //contador mulheres x homens
        if(cadastrados[a].sexo == 'masculino'){
            numHomens++;
        }
        if(cadastrados[a].sexo == 'feminino'){
            numMulheres++;
        }

        //contador Profissoes
        for(b=0;b<vetorDeCargos.length; b++){
            //cadastra na primeira posicao do vetor
            if(vetorNumCargos[0] == ''){
                vetorDeCargos[0] = cadastrados[a].cargo;
                vetorNumCargos[0] = 1;
                primeiro = true
                existe = true
            }
            //cadastra caso a profissao já exista
            if(vetorNumCargos[0]>=1 && cadastrados[a].cargo == vetorDeCargos[b] && primeiro == false && existe== false){
                vetorNumCargos[b]++;
                existe = true
            }
            //cadastra caso a profissao ainda não exista
            if(b == vetorDeCargos.length-1 && existe== false){
                vetorDeCargos.push(cadastrados[a].cargo);
                vetorNumCargos.push(1);
                existe = true
            }
            primeiro = false;
        }
        existe = false;

        //contador media de idades
        somaDeIdades = somaDeIdades + converteIdade(cadastrados[a].dataNascimento)
    }

    console.log('todas as carreiras:')
    console.log(vetorDeCargos);

    console.log('Número por carreiras: ')
    console.log(vetorNumCargos)

    mediaDeIdades = (somaDeIdades/cadastrados.length).toFixed(2)
    console.log('madia:'+ mediaDeIdades)

    document.getElementById('boxAreaEstatisticas').style.cssText = 'display:flex'
    document.getElementById('btnAdministrador').style.cssText = 'display:none'

    areaParaExibir.innerHTML = "<h2>Dados</h2><p>Número de homens: "+numHomens+"</p><p>Número de mulheres: "+numMulheres+"</p><p>Média de idades: "+mediaDeIdades+"</p><p>Cargos ocupados: </p>"
    for(c=0;c<vetorDeCargos.length; c++){
        areaParaExibir.innerHTML +="<p>"+vetorDeCargos[c]+":"+vetorNumCargos[c]+"</p>"
    }
    areaParaExibir.innerHTML += "<div id='boxBtnsExibir'><button onclick='limparAdministrador()'>Ocultar</button><button onclick='mostrarEstatisticas()'>Atualizar</button></div>"
}

//funcao converter data de nascimento em anos
function converteIdade(dataDeNascimento){
    const dataNascimento = dataDeNascimento;
    const dataAtual = '2023-02-14';
    console.log(dataNascimento);

    const defineMeses   = new Date(dataAtual) - new Date(dataNascimento)
    const defineEmDias = defineMeses / (1000 * 60 * 60 * 24);
    console.log(defineEmDias)

    var idade= parseInt((defineEmDias/364.25).toFixed(5))

    return idade;
}

//funcao para limpar area dos adiministrador
function limparAdministrador(){
    areaParaExibir.innerHTML=""
    document.getElementById('boxAreaEstatisticas').style.cssText = 'display:none'
    document.getElementById('btnAdministrador').style.cssText = 'display:flex'
}
