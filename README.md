# senai-projeto-angular

Aplicação web desenvolvida com Angular para o projeto do SENAI.

## Pré-requisitos

- Node.js 20 ou superior
- npm 11 ou superior

Confira as versões instaladas:

```powershell
node --version
npm --version
```

## Instalação

Na pasta do projeto, instale as dependências:

```powershell
npm install
```

Se o comando falhar, verifique se o Node.js e o npm atendem aos pré-requisitos e tente novamente na pasta que contém este arquivo `README.md`.

## Executar em desenvolvimento

Inicie o servidor Angular:

```powershell
npm start
```

Abra [http://localhost:4200](http://localhost:4200) no navegador. O servidor recompila a aplicação automaticamente quando os arquivos são alterados.

Para encerrar o servidor, pressione `Ctrl+C` no terminal.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera uma versão de produção em `dist/`. |
| `npm run watch` | Recompila a aplicação em modo de desenvolvimento quando houver alterações. |
| `npm test` | Executa os testes automatizados. |

## Estrutura principal

- `src/app/components/`: componentes reutilizáveis, como cabeçalho e rodapé.
- `src/app/pages/`: páginas da aplicação, como início e contato.
- `src/app/services/`: serviços usados pela aplicação.
- `public/`: arquivos públicos estáticos.