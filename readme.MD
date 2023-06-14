# Descrição das entidades do banco de dados

URL da api: [https://arnia-kanban.vercel.app/](https://arnia-kanban.vercel.app/)
Documentação API: [Clique aqui](https://drive.google.com/file/d/1aTHbfYA6azh6Thv28CKEJ1KtklDkNccR/view?usp=drive_link)

## Entidade "Usuário"

A entidade "Usuário" representa os usuários do sistema.

### Atributos

| Nome      | Tipo   | Obrigatório | Único | Descrição                          |
| --------- | ------ | ----------- | ----- | ---------------------------------- |
| name      | String | Sim         | Não   | Nome do usuário                    |
| email     | String | Sim         | Sim   | Endereço de e-mail do usuário      |
| password  | String | Sim         | Não   | Senha do usuário (criptografada)   |
| createdAt | Date   | Não         | Não   | Data e hora da criação do registro |

### Exemplo

```javascript
{
  "_id": "60a2a68c7b4f4d004e9a25d9",
  "name": "Fulano de Tal",
  "email": "fulano@example.com",
  "password": "***********",
  "createdAt": "2021-05-17T18:30:00.000Z"
}
```

**Importante**

Observe que os atributos "name", "email" e "password" são obrigatórios. O atributo "email" também deve ser único para cada usuário. O valor padrão do atributo "createdAt" é a data e hora atuais.


## Entidade "Card"

A entidade "Card" representa os cards cadastrados no sistema.

### Atributos

| Nome    | Tipo     | Obrigatório | Único | Descrição                                                                 |
| ------- | -------- | ----------- | ----- | ------------------------------------------------------------------------- |
| userId  | ObjectId | Sim         | Não   | ID do usuário proprietário do registro                                    |
| title   | String   | Sim         | Não   | Título do card                                                            |
| content | String   | Sim         | Não   | Conteúdo do Card                                                          |
| column  | String   | Não         | Não   | Coluna onde está o registro, definido pelo enum ["TODO", "DOING", "DONE"] |

### Exemplo

```javascript
{
    "title": "Teste 2",
    "content": "Lorem ipsum teste lorem Lorem Ipsum ",
    "column": "TODO",
    "userId": "648a4b7b20dc11d3b81fe216",
}
```

**Importante**

Observe que os atributos  "title" e "content" são obrigatórios. O atributo "column" é um enum com as opções "TODO", "DOING" e "DONE". Quando um card é criado no sistema, ele só precisa receber title e content, uma vez que sua column será automaticamente TODO. 
