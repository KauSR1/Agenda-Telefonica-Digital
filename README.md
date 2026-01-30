**📘 Agenda Telefônica Digital — Vanilla JS & LocalStorage**

A **Agenda Telefônica Digital** é uma aplicação web que demonstra como os dados do usuário fluem da interface para um armazenamento persistente diretamente no navegador. Pense nela como o “Hello World” do JavaScript moderno no frontend — simples no conceito, mas poderoso na prática.

Este projeto foca em **JavaScript ES6+**, eliminando a dependência de um backend tradicional e utilizando o LocalStorage para simular o comportamento de um banco de dados relacional no lado do cliente.

---

**🚀 Como Funciona**
**1. Frontend (Interface Reativa)**

Uma interface limpa e moderna desenvolvida com HTML5 e CSS3, utilizando modais para criar uma experiência de usuário fluida, sem recarregamento de página.

---

**2. Arquitetura Modular (JavaScript ES6)**

A lógica da aplicação é organizada em módulos bem definidos, promovendo legibilidade e escalabilidade:

**main.js** — Ponto de entrada e inicialização da aplicação
**ui.js** — Controle do DOM, eventos e estados visuais
**localStorage.js** — Camada de persistência de dados
**formHandler.js** — Captura e processamento dos dados do formulário (SPA behavior)

---

**3. Persistência de Dados (LocalStorage)**

Os dados são serializados em JSON e armazenados via Web Storage API, garantindo persistência mesmo após o fechamento do navegador ou atualização da página.

---

🧠 O Que Este Projeto Ensina

**JavaScript Moderno (ES6+):** Uso prático de import, export, arrow functions e organização modular.
**Manipulação Avançada de DOM:** Eventos, estados e atualização dinâmica da interface.
**Persistência no Frontend:** Como utilizar o LocalStorage para simular um banco de dados.
**Ciclo de Vida CRUD:**
**Create** — Criação de contatos com identificadores únicos (Date.now())
**Read** — Leitura e renderização dos dados armazenados
**Update** — Atualização de registros existentes (em progresso)
**Delete** — Exclusão de contatos (em progresso)
Arquitetura Frontend: Separação clara entre lógica de negócio, persistência e interface.

---

**🛠 Stack Tecnológica**
**Linguagem:** JavaScript (ES6+)
**Armazenamento:** LocalStorage (Web Storage API)
**Interface:** HTML5 / CSS3
**Arquitetura:** Modular / SPA-like Behavior

---

**🎯 Por Que Isso Importa?**

Nem toda aplicação precisa de um backend. Muitos produtos reais começam — ou vivem — inteiramente no frontend. Este projeto ensina o modelo mental essencial do desenvolvimento moderno:

capturar → processar → persistir → renderizar
Tudo isso usando apenas tecnologias nativas do navegador, com código limpo e arquitetura profissional.

---

**🚩 Status do Projeto**

 - [x] **Interface (HTML/CSS)** — Concluído
 - [x] **Arquitetura Modular (JS)** — Concluído
 - [x] **Persistência (LocalStorage)** — Concluído
 - [ ] **Renderização Dinâmica da Lista** — Em breve
 - [ ] **CRUD Completo (Editar e Excluir)** — Em breve


