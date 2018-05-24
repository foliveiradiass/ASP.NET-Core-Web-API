Passos para instalação:

1 - Baixar o .NET Core SDK, site: https://www.microsoft.com/net/download/windows
2 - Instalar o MySql
3 - Configurar a conexão com o banco de dados, StudentRegistration/StudentRegistration/appsettings.json

4 - Abrir o prompt de comando e executar os seguintes comandos:
  D:\Projetos\StudentRegistration\StudentRegistration> dotnet build
  
  Obs: este comando cria o banco de dados com base no Migrations
  D:\Projetos\StudentRegistration\StudentRegistration> dotnet ef database update
  
  Obs: inicia a Web API
  D:\Projetos\StudentRegistration\StudentRegistration> dotnet run
  
Obs: dentro do projeto existe um arquivo para fazer testes com a importação, nome do arquivo "Students.json"  
5 - Abrir projeto "Site" e executar o arquivo "index.html"
