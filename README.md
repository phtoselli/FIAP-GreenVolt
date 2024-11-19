# Integrantes

- Isabelle Moura Alcantara RM 558776
- Henrique Costa Pereira RM 557938
- Evelyn Karoline Gusson Alcântara RM 558733
- Isaac Nogueira Veras Damasceno RM 557764
- Pedro Toselli RM 99076

# Green Volt

A Landing Page do projeto Green Volt é uma aplicação web desenvolvida com **Vite** e **Ant Design** para apresentar nossas soluções e informações sobre energias renováveis, com foco em sustentabilidade e otimização de consumo energético.

# Link do vídeo Pitch explicativo

- https://www.youtube.com/watch?v=twG02RXf_TY

# Instruções para o fronted

## Pré-requisitos

Antes de começar, você precisa ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org) (recomenda-se a versão LTS)
- [Git](https://git-scm.com/)

## Clonando o Repositório

Para começar, clone o repositório do projeto para o seu ambiente local.

1. Abra o terminal e execute o seguinte comando:

```bash
git clone https://github.com/phtoselli/FIAP-GreenVolt.git
```

Navegue até o diretório do projeto:

```bash
cd FIAP-GreenVolt
```

#### Instalando as Dependências

Depois de clonar o repositório, você precisa instalar as dependências do projeto. Para isso, execute o comando abaixo dentro da pasta do projeto:

```bash
npm install
```

Isso vai instalar todas as dependências necessárias para rodar a aplicação, incluindo o Vite e o Ant Design.

#### Rodando o projeto

Agora que você instalou as dependências, pode rodar o projeto localmente. Execute o seguinte comando:

```bash
npm run dev
```

O Vite iniciará um servidor de desenvolvimento e você verá uma mensagem como esta no terminal:

```bash
  VITE v3.x.x  ready in 500ms

  ➜  Local:   http://localhost:5173
  ➜  Network: use `--host` to expose
```

Abra seu navegador e acesse http://localhost:5173 para ver a aplicação em execução.

## Scripts Disponíveis

Durante o desenvolvimento, você pode usar os seguintes comandos:

> npm run dev: Inicia o servidor de desenvolvimento.
> npm run build: Cria uma versão otimizada para produção.
> npm run preview: Visualiza a versão de produção gerada após o build.

## Tecnologias Utilizadas

- Vite: Ferramenta de build de react.
- Ant Design: Biblioteca de componentes UI que facilita a construção de interfaces.
- React: Framework JavaScript para construção de interfaces de usuário.

# Instruções para o Backend

## Endpoints

- Os endpoints abaixo utilizam a plataforma MockAPI.io para simular dados de um backend real.

### Listagem de Escritórios:

- Endpoint: https://67351e4e5995834c8a91efda.mockapi.io/greenvolt/escritorios;
- Descrição: Retorna uma lista de objetos, cada um representando um escritório da GreenVolt, com informações de localização e endereço;

### Descrição da Área "Quem Somos":

- Endpoint: https://67351e4e5995834c8a91efda.mockapi.io/greenvolt/sobre
- Descrição: Retorna uma lista de objetos contendo informações detalhadas sobre a empresa GreenVolt;
