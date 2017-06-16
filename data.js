var levels = [
    {
        id: 1,
        instruction: "Selecione todos os títulos",
        helpTitle: "Selecionar por tag",
        selector: {
            css: "h3"
        },
        helpText: "Para encontrar elementos pelo seu tipo basta digitar o nome do elemento.",
        examples: [
            'Elemento: <code>&lt;span></code>',
            "Locator: <code>span</code>" 
           // 'XPath: //E',
        ],
        html: `
<h3>Título 1</h3>
<p>Lorem ipsum dolor sit amet.</p>
<h3>Título 2</h3>
<p id="descricao">Consectetur adipiscing elit.</p>
    `
    },
    {
        id: 2,
        instruction: "Selecione o texto de descrição",
        helpTitle: "Seleção por id",
        selector: {
            css: "p#descricao"
        },
        helpText: "Para encontrar um elemento por ID basta colocar o valor do atributo ID com um # na frente.",
        examples: [
            'Elemento: <code>&lt;input id="usuario" /></code>',
            'Locator: <code>#usuario</code>'
        ],
        html: `
<h3>Título 1</h3>
<p>Lorem ipsum dolor sit amet.</p>
<h3>Título 2</h3>
<p id="descricao">Consectetur adipiscing elit.</p>
`
    },
    {
        id: 3,
        instruction: "Selecione o item da lista ativo",
        helpTitle: "Selecção por classe",
        selector: {
            css: "li.ativo"
        },
        helpText: "<strong>.nomeDaClasse</strong> seleciona um elemento com um nomeDeClasse (classname). Você pode combinar o seletor por classname com o de tag, por exemplo: <code>input.obrigatorio</code>. A combinação torna a seleção mais precisa.",
        examples: [
            'Elemento: <code>&lt;input class="obrigatorio" /></code>',
            'Locator: <code>.obrigatorio</code>'
        ],
        html: `
<ul>
    <li>item 1</li>
    <li class="ativo">item 2</li>
    <li>item 3</li>
</ul>
    `
    },
    {
        id: 4,
        instruction: "Selecione o campo de texto de apelido",
        helpTitle: "Seleção de elementos com com um valor de atributo",
        selector: {
            css: "input[placeholder='apelido']"
        },
        helpText: "Para localizaer um elemento através de seu valor é necessário informar o elemento, o atributo e o valor. Ele fica uma 'recita de bolo': <code>elemento[atributo='valor']</code>. Basta substituir cada um dos nomes pelo real. ",
        examples: [
            'Elemento: <code>&lt;input type="text" value="Mulher" /></code>',
            'Locator: <code>input[valur="Mulher"]<code> '
        ],
        html: `
<form>
    <input name="j_id819:inputUsuario" type="text" placeholder="usuario" />
    <input type="text" placeholder="apelido" />
    <input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
    <input name="inputSenha:j_id819" type="text" placeholder="senha" />
</form>
`
    },    
    {
        id: 5,
        instruction: "Selecione apenas o botão que faz parte da toolbar",
        helpTitle: "Seleção por Descendente (Descendant Selector)",
        selector: {
            css: "div#toolbar button"
        },
        helpText: "Quando queremos localizar um elemento dentro de outro, não importando quantos, usamos a seguinte sintaxe <code>elemento1 elemento2</code>. Geralmente há uma forma de herança (pai-filho) onde o <code>elemento2</code> é descendente do <code>elemento1</code>",
        examples: [
            'Elemento: <code>&lt;div>&lt;p class="mensagem">Mensagem ao usuário &lt;/p>&lt;/div></code>',
            'Locator: <code>div p</code>'
        ],
        html: `
<span>Algum texto</span>
<div id="toolbar">
    <button type="button">Editar</button> 
    <button type="button">Salvar</button> 
</div>
`
    },
    {
        id: 6,
        instruction: "Selecione apenas o botão Editar",
        helpTitle: "Seleção por Filho (Child Selector)",
        selector: {
            css: "div > button"
        },
        helpText: "Quando queremos localizar um elemento dentro de outro onde, obrigatoriamente, o elemento anterior deve ser identico ao que especificamos temos uma herança (pai-filho). Para que isso aconteça usamos o símbolo de <code>></code> (maior que)",
        examples: [
            'Elemento: <code>&lt;div>&lt;p class="mensagem">Mensagem ao usuário &lt;/p>&lt;/div></code>',
            'Locator: <code>div > p</code>'
        ],
        html: `
<span>Algum texto</span>
<div id="toolbar">
    <button type="button">Editar</button> 
    <a hred="#">Sair</a> 
</div>
`
    },    
    {
        id: 7,
        instruction: "Selecione a primeira div",
        helpTitle: "Seleção do primeiro do tipo",
        helpText: "Para selecionar o primeiro elemento de muitos iguais usamos a função <code>:first-of-type</code>.",
        selector: {
            css: "div:first-of-type"
        },
        examples: [
            'Elemento: <code>&lt;div>Encontre&lt;/div> &lt;div>Texto2&lt;/div>  &lt;div>Texto3&lt;/div></code>',
            'Locator: <code>div:first-of-type</code>'
        ],
        html: `
<div>Primeira div</div>
<div>Segunda div</div>
`
    },
    {
        id: 8,
        instruction: "Selecionar a última div",
        helpTitle: "Seleção do último do tipo",
        helpText: "Para selecionar o último elemento de muitos iguais usamos a função <code>:last-of-type()</code>.",        
        selector: {
            css: "div:last-of-type"
        },
        examples: [
            'Elemento: <code>&lt;div>Texto1&lt;/div> &lt;div>Texto2&lt;/div>  &lt;div>Encontre&lt;/div></code>',
            'Locator: <code>div:first-of-type</code>'
        ],
        html: `
<div>Primeira div</div>
<div>Segunda div</div>
`
    },
    {
        id: 9,
        instruction: "Selecione o segundo elemento da lista",
        helpTitle: "Seleção de elementos filhos específicos através de um pai",
        selector: {
            css: "ul > li:nth-child(2)"
        },
        helpText: "O seletor <code>nth-child(n)</code> corresponde a cada elemento que é o n-ésimo filho, independentemente do tipo, de seu pai.",
        examples: [
            'Elemento: <code>&lt;div>Texto1&lt;/div> &lt;div>Texto2&lt;/div>  &lt;div>Encontre&lt;/div>  &lt;div>Texto3&lt;/div></code>',
            'Locator: <code>div:nth-child(3)</code>'
        ],
        html: `
<ul>
    <li>Home</li>
    <li>Categorias</li>
    <li>Relatórios</li>
    <li>Ajuda</li>
</ul>
`
    },
    {
        id: 11,
        instruction: "Selecione o campo de email",
        helpTitle: "Seleciona elementos com um valor que está contido em um texto de um atributo especificado",
        selector: {
            css: "input[name*='inputEmail']"
        },
        helpText: "Para localizar um elemento com um valor parcial é necessário usar o <code>*</code> antes do símbolo de igual (<code>=</code>).",
        examples: [
            'Elemento: <code>&lt;input id="239_usuario_239" /></code>',
            'Locator: <code>input[value=*"usuario"]</code>'
        ],
        html: `
<form>
    <input name="j_id819:inputUsuario" type="text" placeholder="usuario" />
    <input name="apelido" type="text" placeholder="apelido" />
    <input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
    <input name="inputSenha:j_id819" type="text" placeholder="senha" />
</form>
`
    },
    {
        id: 12,
        instruction: "Selecione o campo de senha",
        helpTitle: "Seleciona elementos com um atributo que inicia com um valor especificado",
        selector: {
            css: "input[name^='inputSenha']"
        },
        helpText: "Para localizar um elemento com um valor inicial é necessário usar o <code>^</code> antes do símbolo de igual (<code>=</code>).",
        examples: [
            'Elemento: <code>&lt;input id="usuario_239" /></code>',
            'Locator: <code>input[value=^"usuario"]</code>'
        ],
        html: `
<form>
    <input name="j_id819:inputUsuario" type="text" placeholder="usuario" />
    <input name="apelido" type="text" placeholder="apelido" />
    <input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
    <input name="inputSenha:j_id819" type="text" placeholder="senha" />
</form>
`
    },
    {
        id: 13,
        instruction: "Selecione o campo de usuário",
        helpTitle: "Seleciona elementos com um atributo que termina com um valor especificado",
        selector: {
            css: "input[name$='inputUsuario']"
        },
        helpText: "Para localizar um elemento com um valor de texto final é necessário usar o <code>^</code> antes do símbolo de igual (<code>$</code>).",
        examples: [
            'Elemento: <code>&lt;input id="239_usuario" /></code>',
            'Locator: <code>input[value$="usuario"]</code>'
        ],
        html: `
<form>
    <input name="j_id819:inputUsuario" type="text" placeholder="usuario" />
    <input name="apelido" type="text" placeholder="apelido" />
    <input name="j_id819:inputEmail:j_id819" type="text" placeholder="email" />
    <input name="inputSenha:j_id819" type="text" placeholder="senha" />
</form>
`
    }    
//     {
//         id: 13,
//         instruction: "Selecione o botão Editar da linha 678",
//         helpTitle: "Caminhando pelo DOM",
//         selector: {
//             xpath: "//td[contains(text(), '678')]/../td/button[@class = 'editar']"
//         },
//         helpText: "Você pode usar 'mágica' no XPath para navegar sobre os elementos, como: /../",
//         examples: [
//             'CSS: n/a',
//             'XPath: //E1/../E2',
//         ],
//         html: `
// <table class="table table-bordered">
//     <tr>
//         <td>456</td>
//         <td>Descrição</td>
//         <td>&euro; 100,-</td>
//         <td><button class="editar">Editar</button><button class="deletar">Remover</button></td>
//     </tr>
//     <tr>
//         <td>123</td>
//         <td>Descrição</td>
//         <td>&euro; 100,-</td>
//         <td><button class="editar">Editar</button><button class="deletar">Remover</button></td>
//     </tr>
//     <tr>
//         <td>678</td>
//         <td>Descrição</td>
//         <td>&euro; 100,-</td>
//         <td><button class="editar">Editar</button><button class="deletar">Remover</button></td>
//     </tr>
//     <tr>
//         <td>987</td>
//         <td>Descrição</td>
//         <td>&euro; 100,-</td>
//         <td><button class="editar">Editar</button><button class="deletar">Remover</button></td>
//     </tr>
// </table>
// `
//     }


];