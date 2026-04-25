# Tasks CRUD API

API REST de gerenciamento de tarefas construída com Node.js e Express, baseada no desafio de CRUD de tarefas da formação Node.js da Rocketseat.

## Tecnologias

- Node.js
- Express
- uuid
- csv-parse
- Nodemon

## Funcionalidades

- Criar tarefa
- Listar tarefas (com filtro por título e descrição)
- Atualizar título e descrição de uma tarefa
- Marcar tarefa como concluída
- Excluir tarefa
- Importar tarefas em massa via arquivo CSV

## Como rodar o projeto

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/tasks-crud-api-node.git

# Entrar na pasta
cd tasks-crud-api-node

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

## Rotas

- `POST /tasks` – cria uma nova tarefa  
- `GET /tasks` – lista todas as tarefas (com filtros opcionais `title` e `description` via query params)  
- `PUT /tasks/:id` – atualiza título e descrição de uma tarefa  
- `DELETE /tasks/:id` – remove uma tarefa  
- `PATCH /tasks/:id/complete` – marca uma tarefa como concluída  
- `POST /tasks/import` – importa tarefas a partir de um arquivo CSV