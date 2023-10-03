# curso-testes-de-integracao

Passo a passo:

- Instalar jest ou supertest:

  $ npm i -D jest ts-jest ts-node @types/jest
  
  $ npm i -D supertest @types/supertest

- Configurar o arquivo jest.config.cjs ou js

- Criar arquivo test

- Configurar o script

- Comandos para inserir no script(opcional):
  
  --coverage : Gerar um relatório de cobertura dos testes no código
  
  --verbose : Mostrar o console.log dos arquivos jest

  --watch : Automatizar os testes para rodarem sempre que algo no código é alterado

  --runInBand : Executar os testes paralelamente, ao invés de serialmente

  --collectCoverageFrom='caminho do arquivo' : Gera um relatório de cobertura dos testes de arquivos selecionados
