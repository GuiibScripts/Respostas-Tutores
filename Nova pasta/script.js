const container = document.getElementById('botoes-container');
const aviso = document.getElementById('copiado');

const mensagensPorCategoria = mensagens.reduce((acc, msg) => {
  if (!acc[msg.categoria]) {
    acc[msg.categoria] = [];
  }
  acc[msg.categoria].push(msg);
  return acc;
}, {});

for (const [categoria, mensagens] of Object.entries(mensagensPorCategoria)) {
  const categoriaDiv = document.createElement('div');
  categoriaDiv.className = 'categoria';
  
  const titulo = document.createElement('h2');
  titulo.textContent = categoria;
  categoriaDiv.appendChild(titulo);
  
  // Cria container dos botões
  const botoesDiv = document.createElement('div');
  botoesDiv.className = 'botoes-categoria';
  
  // Adiciona botões
  mensagens.forEach(msg => {
    const btn = document.createElement('button');
    btn.className = 'botao';
    btn.innerText = msg.nome;
    btn.onclick = () => copiarTexto(msg.texto, btn); 
    botoesDiv.appendChild(btn);
  });
  
  categoriaDiv.appendChild(botoesDiv);
  container.appendChild(categoriaDiv);
}

function copiarTexto(texto, botao) {
  navigator.clipboard.writeText(texto).then(() => {
    aviso.style.display = 'block';
    botao.classList.add('copiado');
    setTimeout(() => {
      aviso.style.display = 'none';
      botao.classList.remove('copiado');
    }, 2000);
  });
}