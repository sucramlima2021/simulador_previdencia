var campo = document.getElementById("tel");
var field = document.getElementById("email");
var ddd = [11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,55,54,55,61,62,63,64,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98];
var enviado = false;
var dadosprev = [];
var dadospoup = [];
var dados0 = [];
const rta2 = 6;
const jam2 = ((1 + rta2 / 100) ** (1 / 12) - 1);
var data = {
    labels: ["5 anos", "", "", "", "", "10 anos", "", "", "", "", "15 anos", "", "", "", "", "20 anos", "", "", "", "", "25 anos", "", "", "", "", "30 anos", "", "", "", "", "35 anos"],
    datasets: [{
        label: 'Capital sem juros',
        data: dados0,
        fill: true,
        backgroundColor: 'rgba(68,131,124, 0.8)',
        borderColor: 'rgb(0,100,0)',
        tension: 0.4,
        labels: ["em 5 anos", "em 6 anos", "em 7 anos", "em 8 anos", "em 9 anos", "em 10 anos", "em 11 anos", "em 12 anos", "em 13 anos", "em 14 anos", "em 15 anos", "em 16 anos", "em 17 anos", "em 18 anos", "em 19 anos", "em 20 anos", "em 21 anos", "em 22 anos", "em 23 anos", "em 24 anos", "em 25 anos", "em 26 anos", "em 27 anos", "em 28 anos", "em 29 anos", "em 30 anos", "em 31 anos", "em 32 anos", "em 33 anos", "em 34 anos", "em 35 anos"]
    },
      {
        label: 'Poupança',
        data: dadospoup,
        fill: true,
        backgroundColor: 'rgba(169,169,169, 0.8)',
        borderColor: 'rgb(79,79,79)',
        tension: 0.4,
        labels: ["em 5 anos", "em 6 anos", "em 7 anos", "em 8 anos", "em 9 anos", "em 10 anos", "em 11 anos", "em 12 anos", "em 13 anos", "em 14 anos", "em 15 anos", "em 16 anos", "em 17 anos", "em 18 anos", "em 19 anos", "em 20 anos", "em 21 anos", "em 22 anos", "em 23 anos", "em 24 anos", "em 25 anos", "em 26 anos", "em 27 anos", "em 28 anos", "em 29 anos", "em 30 anos", "em 31 anos", "em 32 anos", "em 33 anos", "em 34 anos", "em 35 anos"]
    },
    {
        label: 'Previdência Privada',
        data: dadosprev,
        fill: true,
        backgroundColor: 'rgba(221,124,59, 0.8)',
        borderColor: 'rgb(200,100,30)',
        tension: 0.4,
        labels: ["em 5 anos", "em 6 anos", "em 7 anos", "em 8 anos", "em 9 anos", "em 10 anos", "em 11 anos", "em 12 anos", "em 13 anos", "em 14 anos", "em 15 anos", "em 16 anos", "em 17 anos", "em 18 anos", "em 19 anos", "em 20 anos", "em 21 anos", "em 22 anos", "em 23 anos", "em 24 anos", "em 25 anos", "em 26 anos", "em 27 anos", "em 28 anos", "em 29 anos", "em 30 anos", "em 31 anos", "em 32 anos", "em 33 anos", "em 34 anos", "em 35 anos"]
    }]
};
const tooltip = {
    callbacks: {
        title: function (context) {
            return '';
        },
        label: function (context) {

            var titulo = context.dataset.label;
            var ano = context.dataset.labels[context.dataIndex];
            var valor = "R$ " + context.formattedValue;

            var go = [titulo, ano, valor]
            return go
        }
    }
};
const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        elements: {
            point: {
                radius: 5,
                hoverRadius: 10
            }
        },
        interaction: {
            mode: 'index'
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Comparativo da evolução do capital: Previdência Privada X Poupança'
            },
            tooltip
        }
    },
};
const myChart = new Chart(document.getElementById("myChart"), config);
function atualiza(tipo) {
    switch (tipo) {
        case 1:
            var sai = parseInt(document.getElementById("sai").value);
            var saif = sai.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("ai").innerHTML = saif;
            at();
            break;
        case 2:
            var scm = parseInt(document.getElementById("scm").value);
            var scmf = scm.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("cm").innerHTML = scmf;
            at();
            break;
        case 3:

            document.getElementById("re").innerHTML = document.getElementById("srt").value + "% - simulação";
            at();
            break;
        case 4:


            document.getElementById("tempo").innerHTML = document.getElementById("stp").value + " anos";
            at();
            break;
        case 5:
            
            at();
           
            break;
        case 6:
            var sai1 = parseInt(document.getElementById("sai1").value);
            var sai1f = sai1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("apini").value = sai1f;
            break;
        case 7:
            var scm1 = parseInt(document.getElementById("scm1").value);
            var scm1f = scm1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("apmen").value = scm1f;
            break;
        case 8:
            var srt1 = parseInt(document.getElementById("srt1").value);

            document.getElementById("rta").value = srt1 + "% - simulação";
            break;

        default:
            pass;
    }


}
function at(){
  var sai = parseInt(document.getElementById("sai").value);
            var scm = parseInt(document.getElementById("scm").value);
            var srt = parseInt(document.getElementById("srt").value);
            var stp = parseInt(document.getElementById("stp").value);
            var jam = ((1 + srt / 100) ** (1 / 12) - 1);
            var tot = (sai * (1 + jam) ** (stp * 12)) + (scm * ((((1 + jam) ** (stp * 12)) - 1) / jam));
            document.getElementById("premio").innerHTML = tot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            var ind = 0;
            var vg0 = sai;
            for (var i = 60; i <= 420; i++) {

                if (i % 12 == 0) {
                    var vgprev = (sai * (1 + jam) ** i) + (scm * ((((1 + jam) ** i) - 1) / jam));
                    dadosprev[ind] = vgprev;
                    var vgpoup = (sai * (1 + jam2) ** i) + (scm * ((((1 + jam2) ** i) - 1) / jam2));
                    dadospoup[ind] = vgpoup;
                    var val = vg0 + scm * i;
                    dados0[ind] = val;
                    ind += 1;

                }
            }
            myChart.update();
}
function envia(pag) {
    if (document.getElementById("nome").value == "" | document.getElementById("tel").value == "" | document.getElementById("email").value == "" | document.getElementById("nasc").value == "") {
        alert("todos os campos devem ser preenchidos");
    }
    else {
        var carousel1 = document.getElementById("simulador");
        var carousel = bootstrap.Carousel.getInstance(carousel1);
        carousel.next()

        if (enviado == false) {
            faz(pag);
            enviado = true;
        }
    }
}
function faz(pag) {
    var pagina = '';
    if (pag == 1){
        pagina = 'Previdência Privada Crianças';
    }
    if (pag == 2){
        pagina = 'Previdência Privada';
    }
    if (pag == 3){
        pagina = 'Simulador de previdência privada';
    }
    var nome = document.getElementById("nome").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var data = new FormData();
    data.append('nome', nome);
    data.append('tel', tel);
    data.append('email', email);
    data.append('pag', pagina);
    
}


function calcula() {
    var carousel1 = document.getElementById("simulador");
    var carousel = bootstrap.Carousel.getInstance(carousel1);
    carousel.next()
    var nasc = document.getElementById("nasc").value;
    var dataatual = new Date();
    var idade = parseInt(dataatual.getFullYear()) - parseInt(nasc);
    var aposenta = parseInt(document.getElementById("anos").value) - idade;
    var nome = document.getElementById("nome").value;

    var apini = parseInt(document.getElementById("sai1").value);
    var apmen = parseInt(document.getElementById("scm1").value);
    var ppp = document.getElementById("rta").value;


    document.getElementById("nm").innerHTML = nome;
    document.getElementById("ai").innerHTML = document.getElementById("apini").value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("cm").innerHTML = document.getElementById("apmen").value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("re").innerHTML = ppp + " - simulação";
    document.getElementById("tempo").innerHTML = aposenta + " anos";


    var pppp = ppp.split("%");

    var rta = parseFloat(pppp[0]);



    var jam = ((1 + rta / 100) ** (1 / 12) - 1);
    var jam2 = ((1 + rta2 / 100) ** (1 / 12) - 1);
    var tot = (apini * (1 + jam) ** (aposenta * 12)) + (apmen * ((((1 + jam) ** (aposenta * 12)) - 1) / jam));
    var semjuros = (apini * (1 + jam2) ** (aposenta * 12)) + (apmen * ((((1 + jam2) ** (aposenta * 12)) - 1) / jam2));
    document.getElementById("premio").innerHTML = tot.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("semjuros").innerHTML = semjuros.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("sai").value = apini;
    document.getElementById("scm").value = apmen;
    document.getElementById("srt").value = pppp[0];
    document.getElementById("stp").value = aposenta;
    var ind = 0;
    var vg0 = apini;
    if (aposenta > 35){
        aposenta = 35;
    }
    if (dadosprev.length == 0){
      for (var i = 60; i <= aposenta*12; i++) {

          if (i % 12 == 0) {
              var vgprev = (apini * (1 + jam) ** i) + (apmen * ((((1 + jam) ** i) - 1) / jam));
              dadosprev.push(vgprev);
              var vgpoup = (apini * (1 + jam2) ** i) + (apmen * ((((1 + jam2) ** i) - 1) / jam2));
              dadospoup.push(vgpoup);
              var val = vg0 + apmen * i;
              dados0.push(val);
              var rot = i/12;
              var rotu = rot + " anos";
              rotulos1.push(rotu);

          }
      }
      myChart.update(); 
      }
      else {
        var indice = dadosprev.length;
        if (indice > aposenta){
            for(var tt = 0; tt < indice - aposenta; tt++){
               dadosprev.pop();
               dadospoup.pop();
               dados0.pop();
               rotulos1.pop();
                
            }
        }
        for (var i = 60; i <= aposenta*12; i++) {

          if (i % 12 == 0) {
              var vgprev = (apini * (1 + jam) ** i) + (apmen * ((((1 + jam) ** i) - 1) / jam));
              dadosprev[ind] = vgprev;
              var vgpoup = (apini * (1 + jam2) ** i) + (apmen * ((((1 + jam2) ** i) - 1) / jam2));
              dadospoup[ind] = vgpoup;
              var val = vg0 + apmen * i;
              dados0[ind] = val;
              var rot = i/12;
              var rotu = rot + " anos";
              rotulos1[ind] = rotu;
              ind += 1;
          }
        }
        myChart.update(); 
      }
}

function numero(){
    var v = campo.value.replace(/[^0-9]/gi,"");
    campo.value=v;
    
}

function valida(pag){
    var valida = false;
    if (((campo.value.length == 10) && (parseInt(campo.value.substr(2,1)) > 0) && (parseInt(campo.value.substr(2,1)) < 5 )) || ((campo.value.length == 11) && (parseInt(campo.value.substr(2,1)) > 4) && (parseInt(campo.value.substr(2,1)) < 10))){
        var pegaddd = parseInt(campo.value.substr(0,2));
        
        if (ddd.indexOf(pegaddd) !== -1){
            var valor = campo.value.split('');
            //console.log(valor);
            let repetidos = valor.reduce(function (todosNum, num) {
                if (num in todosNum) {
                    todosNum[num]++;
                }
                else {
                    todosNum[num] = 1;
                }
                return todosNum;
            }, {});
            for (const [key, value] of Object.entries(repetidos)) {
                //console.log(key + ' - ' + value);
                if (value > 5){
                    valida = false;
                    break;
                }
                else{
                    valida = true;
                }
            }

        }
        
    }
   
    
   if (valida == false){
       alert('Telefone inválido');
       campo.focus();
   }
   else{
      validacaoEmail(pag);
   }
    
    
}

function validacaoEmail(pag) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    envia(pag);
    }
    else{
    
    alert("E-mail invalido");
    field.focus();
    }
    }
