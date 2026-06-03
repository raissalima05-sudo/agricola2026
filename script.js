// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Ação do Botão "Descubra Como" (Rolagem suave até os pilares)
    const btnConhecer = document.getElementById("btn-conhecer");
    if (btnConhecer) {
        btnConhecer.addEventListener("click", () => {
            const secaoPilares = document.getElementById("pilares");
            secaoPilares.scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. Interceptação do Formulário de Contato
    const formContato = document.getElementById("form-contato");
    if (formContato) {
        formContato.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede a página de recarregar
            
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            // Alerta de sucesso simulado
            alert(`Obrigado pelo interesse, ${nome}! Juntos vamos cultivar um futuro mais verde. Enviamos detalhes para o e-mail: ${email}.`);
            
            formContato.reset(); // Limpa os campos do formulário
        });
    }
});