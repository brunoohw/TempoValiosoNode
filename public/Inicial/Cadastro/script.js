userForm.addEventListener('submit' , async (e) => {
   
    e.preventDefault();  // Previne o recarregamento da página
    const novoUsuario = {
        "usuario": usuarioName.value,
        "email": usuarioEmail.value,
        "senha": usuarioSenha.value
    }

    try {
        const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoUsuario)  // Enviando a descrição ao backend
        });

    } catch (error) {
        console.error('Erro ao adicionar tarefa:', error);
    }

});
const userForm = document.getElementById('formCadastro');
const usuarioName = document.getElementById('txtUsuario');
const usuarioEmail = document.getElementById('txtEmail');
const usuarioSenha = document.getElementById('password');


document.getElementById('toggleSenha').addEventListener('click', function () {
    const senhaInput = document.getElementById('password');
    const tipoAtual = senhaInput.type;
    
    if (tipoAtual === 'password') {
        senhaInput.type = 'text';
        this.setAttribute('aria-label', 'Ocultar Senha');
        this.innerHTML = '<i class="fas fa-eye-slash"></i>'; // Ícone de "ocultar"
    } else {
        senhaInput.type = 'password';
        this.setAttribute('aria-label', 'Mostrar Senha');
        this.innerHTML = '<i class="fas fa-eye"></i>'; // Ícone de "mostrar"
    }
});

    ScrollReveal().reveal('header', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.input-box', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.input-submit', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.sing-up-link', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.forgot', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });
    
    ScrollReveal().reveal('.sign-up-link', {
        origin: 'left',
        duration: 1500,
        distance: '15%'
    });