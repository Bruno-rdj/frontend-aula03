// Capturar elementos do form
const nome = document.getElementById('nome');
const categoria = document.getElementById('categoria');
const aceito = document.getElementById('aceito');
const arquivo = document.getElementById('arquivo');
const form = document.getElementById('cadastro');

// Capturar elementos da prévia
const pNome = document.getElementById('p-nome');
const pCategoria = document.getElementById('p-categoria');
const pAceito = document.getElementById('p-aceito');
const pArquivo = document.getElementById('p-arquivo');

// Listeners para atualizar prévia
nome.addEventListener('input', () => {
    pNome.textContent = nome.value || '—';
});

categoria.addEventListener('change', () => {
    pCategoria.textContent = categoria.value || '—';
});

aceito.addEventListener('change', () => {
    pAceito.textContent = aceito.checked ? 'sim' : 'não';
});

arquivo.addEventListener('change', () => {
    pArquivo.textContent = arquivo.files.length > 0 ? arquivo.files[0].name : 'nenhum';
});

// Listener para submit do form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Formulário enviado!');
    const formData = new FormData(form);
    const entries = [];
    for (let [key, value] of formData.entries()) {
        entries.push([key, value]);
    }
    console.log(entries);
});