export default class Card {
  constructor(
    containerPai,
    fruta,
    catProduto,
    preco,
    txtBotao, 
    corCard, 
    corButton, 
    corConainer,
    corTxtBotao,
    corContainerMiniatura,
    urlImgPrincipal,
    miniImg1,
    miniImg2,
    miniImg3,
    miniImg4,
    listaItem1,
    listaItem2,
    listaItem3,
    listaItem4,
    ) 

    {
    this.containerPai = containerPai;
    this.fruta = fruta;
    this.catProduto = catProduto;
    this.preco = preco;
    this.txtBotao = txtBotao;
    this.corCard = corCard;
    this.corButton = corButton;
    this.corConainer = corConainer;
    this.corTxtBotao = corTxtBotao;
    this.corContainerMiniatura = corContainerMiniatura;
    this.urlImgPrincipal = urlImgPrincipal;
    this.miniImg1 = miniImg1;
    this.miniImg2 = miniImg2;
    this.miniImg3 = miniImg3;
    this.miniImg4 = miniImg4;
    this.listaItem1 = listaItem1;
    this.listaItem2 = listaItem2;
    this.listaItem3 = listaItem3;
    this.listaItem4 = listaItem4;
    this.moeda = "R$ "
  }

  //Cria o card que contém a foto da fruta grande, e também o container com as fotos menores
  criaCard() {
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    
    const div = document.createElement('div');
    div.style.background = 'radial-gradient(circle, #fff 1%,'+this.corCard+' 99%)';
    console.log(this.corCard)

    const icoCompartilhar = document.createElement('img');
    icoCompartilhar.src = './assets/img/icon/ico_compartilhar.png';
    icoCompartilhar.classList.add('icoCompartilhar');


    const icoamei = document.createElement('img');
    icoamei.src = './assets/img/icon/ico_amei.png';
    icoamei.classList.add('icoamei');

    const imgPrincipal = document.createElement('img');
    imgPrincipal.src = this.urlImgPrincipal;
    imgPrincipal.classList.add('imgPrincipal');

    const containerMiniaturas = document.createElement('div');
    containerMiniaturas.classList.add('containerMiniaturas');
    containerMiniaturas.style.background = this.corContainerMiniatura;

    const miniImg1 = document.createElement('img');
    miniImg1.src = this.miniImg1;
    
    const miniImg2 = document.createElement('img');
    miniImg2.src = this.miniImg2;

    const miniImg3 = document.createElement('img');
    miniImg3.src = this.miniImg3;

    const miniImg4 = document.createElement('img');
    miniImg4.src = this.miniImg4;

    containerMiniaturas.append(miniImg1);
    containerMiniaturas.append(miniImg2);
    containerMiniaturas.append(miniImg3);
    containerMiniaturas.append(miniImg4);

    div.append(icoCompartilhar);
    div.append(icoamei);
    div.append(imgPrincipal);
    div.append(containerMiniaturas);

    divCard.append(div);
    
    return(divCard);
  }

  //Cria o card que contém a as informações do produto.
  criaInfo() {
    const divInfo = document.createElement('div');
    divInfo.classList.add('info');

    const nomeProduto = document.createElement('h1');
    nomeProduto.innerText = this.fruta;

    const categProduto = document.createElement('h3');
    categProduto.innerText = this.catProduto;

    const precoProduto = document.createElement('h2');
    precoProduto.innerText = this.preco;

    const moeda = document.createElement('span');
    moeda.innerText = this.moeda;

    const divPreco = document.createElement('div');
    divPreco.classList.add('divpreco');

    const informacoesProdutos = document.createElement('h6')
    informacoesProdutos.innerText = 'Informação do Produto';

    const listaInfos = document.createElement('ul')

    const listaItem1 = document.createElement('li')
    listaItem1.innerText = this.listaItem1;

    const listaItem2 = document.createElement('li')
    listaItem2.innerText = this.listaItem2;

    const listaItem3 = document.createElement('li')
    listaItem3.innerText = this.listaItem3;

    const listaItem4 = document.createElement('li')
    listaItem4.innerText = this.listaItem4;

    const botao = document.createElement('button')
    botao.classList.add('btnCard')
    botao.innerText = this.txtBotao;
    botao.style.background = this.corButton;
    botao.style.color = this.corTxtBotao;

    listaInfos.append(listaItem1);
    listaInfos.append(listaItem2);
    listaInfos.append(listaItem3);
    listaInfos.append(listaItem4);

    divPreco.append(moeda);
    divPreco.append(precoProduto);

    divInfo.append(nomeProduto)
    divInfo.append(categProduto)
    divInfo.append(divPreco)
    divInfo.append(informacoesProdutos)
    divInfo.append(listaInfos)
    divInfo.append(botao)

    return(divInfo);
  }

  criarCard() {
    const divCard = this.criaCard()
    const divInfo = this.criaInfo()
    
    const divContainer = document.createElement('div');
    divContainer.classList.add('cardContainer');
    divContainer.style.background = this.corConainer;

    divContainer.append(divCard);
    divContainer.append(divInfo);

    this.containerPai.append(divContainer);

    return(this.containerPai)
  }

}
