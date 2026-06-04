  const acoes = [
    {icone: "🌱", texto: 'Reduzir o consumo de papel e madeira Utilizar apenas o necessário. Preferir produtos reciclados ou certificados. '},
    {icone: "🌱", texto: 'Reciclar e reutilizar materiais. Separar corretamente os resíduos.Reaproveitar materiais sempre que possível.'},
    { icone: '🌱', texto: 'Participar de ações de reflorestamento. Plantar árvores em áreas urbanas ou rurais.Apoiar projetos de recuperação ambiental.' },
    { icone: '🌱', texto: 'Conscientizar outras pessoas a compartilhar informações sobre os impactos do desmatamento.Incentivar amigos e familiares a adotarem práticas sustentáveis.' },
    { icone: '🌱', texto: 'Apoiar organizações ambientais. Contribuir com projetos de preservação.Participar de campanhas e iniciativas de proteção das florestas.' },
    { icone: '🌱', texto: 'Economizar recursos naturais. Reduzir o desperdício de água e energia.Adotar hábitos mais sustentáveis no dia a dia.'}
]


const container = document.querySelector('#container-acoes')

for(let i = 0; i < acoes.length; i++ ) {
    const item = acoes[i]
    const div = document.createElement('div');
    div.className = "acao-item"
    div.innerHTML = `
        <div class="acao-icone">${item.icone}</div>
        <p class="acao-texto">${item.texto}</p>
    `
    container.appendChild(div)
}

const nav = document.querySelector('.menu-navegacao')

window.addEventListener('scroll', () => {
    if(window.scrollY > 10) {
        nav.style.opacity = '0.5' 
    }else {       
        nav.style.opacity = '1'
    }
});

const form = document.getElementById("formulario-adesao");
const msg = document.getElementById("mensagem-retorno");

console.log(msg)

form.addEventListener("submit", (e) => {
        e.preventDefault();
        

        if(form.checkValidity()) {
            const nome = document.getElementById("nome").value
            msg.textContent = `✅ Sucesso, ${nome}! Adesão registrada.`
            msg.className = 'mensagem-retorno sucesso'
            form.reset()
        }else{
            msg.textContent = '❌ Preencha os campos corretamente.';
            msg.className = 'mensagem-retorno erro';
            msg.style.display = 'block';
        }    
    }
)