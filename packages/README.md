# Como rodar o projeto com Docker Compose!



### Pré-requisitos:
1. Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema. Você pode encontrar instruções de instalação no site oficial do Docker
    

### Estrutura do Projeto:

```
    packages/
    ├── backend/
    │   ├── Dockerfile
    │   └── ... (outros arquivos do backend)
    ├── frontend/
    │   ├── Dockerfile
    │   └── ... (outros arquivos do frontend)
    └── docker-compose.yml

```

# Executando o Docker Compose
1. Abra um terminal e navegue até o diretório onde está o arquivo `docker-compose.yaml`
2. Execute o seguinte comando para construir e iniciar os serviços definidos no arquivo 

```bash
    docker compose up --build
```

## Acessando os Serviços

1. Após a execução do comando acima, os serviços frontend, backend e mongo devem estar em execução.
2. Você pode acessar o frontend em http://localhost:3001.
3. O backend estará disponível em http://localhost:3030.

