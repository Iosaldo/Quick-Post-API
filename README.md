Quick-Post API 🚀
Este projeto é uma API REST básica desenvolvida como parte da trilha Software Engineering Foundations. O objetivo é consolidar conhecimentos em JavaScript assíncrono, fundamentos de Back-End com Express.js e gestão de versões com Git/GitHub.
📌 Funcionalidades
GET /messages: Lista todas as mensagens armazenadas.
POST /messages: Adiciona uma nova mensagem ao "mural".
DELETE /messages/:id: Remove uma mensagem específica via ID.
🛠️ Tecnologias Utilizadas
Node.js (Ambiente de execução)
Express.js (Framework web para rotas HTTP)
JavaScript (ES6+) (Lógica, Async/Await e manipulação de Arrays)
Git & GitHub (Controlo de versão e branching)
📂 Como configurar o projeto localmente
Clone o repositório:
bash
git clone github.com
cd quick-post-api
Use o código com cuidado.

Instale as dependências:
Certifique-se de que tem o Node.js instalado (versão 18 ou superior recomendada para 2025).
bash
npm install
Use o código com cuidado.

Inicie o servidor:
bash
node app.js
Use o código com cuidado.

O servidor estará ativo em http://localhost:3000.
🧪 Como testar a API
Via Terminal (cURL)
Para criar uma nova mensagem:
bash
curl -X POST -H "Content-Type: application/json" -d '{"text":"Olá do Back-end!"}' http://localhost:3000/messages
Use o código com cuidado.

Via JavaScript (Async/Fetch)
Pode testar o comportamento assíncrono diretamente no console do seu navegador enquanto o servidor corre:
javascript
const response = await fetch('http://localhost:3000/messages');
const data = await response.json();
console.log(data);
Use o código com cuidado.

🧠 Aprendizados Relevantes
Arquitetura Cliente-Servidor: Compreensão de como as requisições HTTP funcionam.
Async JavaScript: Uso de async/await para lidar com operações não bloqueantes.
Git Flow: Utilização de branches separadas para novas funcionalidades (feat/) e correção de bugs, mantendo a main estável.
Projeto desenvolvido para fins educativos - 2025
