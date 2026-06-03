# Agro Forte, Futuro Sustentável 🌾✨

Este é um projeto de site responsivo focado no agronegócio moderno e sustentável. O objetivo principal da página é demonstrar como a tecnologia e as boas práticas agrícolas podem caminhar lado a lado com a preservação ambiental, garantindo alta produtividade e equilíbrio ecológico.

---

## 🛠️ Como o projeto foi construído

O site foi desenvolvido do zero seguindo as melhores práticas de desenvolvimento web, dividindo a estrutura (HTML), o design (CSS) e o comportamento dinâmico (JavaScript) em arquivos totalmente independentes para facilitar a manutenção.

### 1. Estrutura (HTML5)
O arquivo `index.html` organiza o conteúdo de forma semântica e acessível:
* **Cabeçalho (`<header>`):** Menu fixo para navegação rápida entre as seções.
* **Banner Principal (`<section class="hero">`):** Um impacto visual inicial utilizando uma imagem de fundo (via Unsplash) que conecta o usuário diretamente ao tema da terra.
* **Pilares (`<section class="conteudo">`):** Layout em formato de cartões (*cards*) detalhando os pontos essenciais: Tecnologia Verde, Preservação Ativa e Energia Limpa.
* **Formulário de Contato (`<section class="contato">`):** Um ponto de conversão para capturar o interesse do visitante.

### 2. Estilização (CSS3)
O arquivo `style.css` traz a identidade visual do projeto:
* **Paleta de Cores:** Focada em variações de verde escuro (`#1b4332`), verde claro (`#52b788`) e tons neutros de terra/cinza para passar a sensação de natureza e profissionalismo.
* **Responsividade:** Utilização de *Flexbox* (`display: flex`) e propriedades flexíveis (`flex-wrap`) para garantir que o site se adapte perfeitamente tanto a telas de computadores quanto a dispositivos móveis.
* **Experiência do Usuário (UX):** Transições suaves nos botões e links (`transition`), além de rolagem macia (`scroll-behavior: smooth`).

### 3. Dinâmica (JavaScript / *Jovem Script*)
O arquivo `script.js` adiciona interações inteligentes sem pesar a página:
* **Rolagem Suave:** O botão principal "Descubra Como" identifica a posição da seção de pilares na tela e desliza o usuário até lá de forma elegante através do método `.scrollIntoView()`.
* **Manipulação de Formulário:** O script intercepta o envio do formulário de contato (`preventDefault`), coleta o nome e e-mail digitados, exibe uma mensagem personalizada de sucesso na tela e limpa os campos para o próximo uso.

---

## 📋 Prompt Original Utilizado

Para a geração da base deste código, foi utilizado o seguinte comando:

> *"faça um site no github contendo o tema agro forte, futuro sustentavel equilibrio entre a produção e meio ambiente separando html, css, jovem script"*

---

## 🚀 Como Executar o Projeto Localmente

1. Faça o clone deste repositório ou baixe os arquivos em sua máquina:
   ```bash
   git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
