# MEDVIDA
> Status do Projeto: Em desenvolvimento :warning:
## 1 - Descrição do projeto :four_leaf_clover:

Aplicativo que consiste trazer conectividade no ambiente hospitalar/clínico, possibilitando uma relação de fácil comunicação entre os funcionários da área de saúde e socorristas em atuação. A aplicação tem como finalidade agir como um laudo/histórico médico, coletado por paramédicos durante o amparo do paciente, auxiliando na administração entre as informações recebidas e tratadas ao longo do caminho entre onde a ambulância estava e o hospital.

### - Motivação

> Auxiliar no fluxo de informações da área de saúde de forma mais rápida, consistente e dinâmica. A motivação da proposta surgiu na matéria de Informática Médica, que trata sobre como implementar os conceitos de saúde 4.0, cursada por um dos integrantes. Posteriormente foi discutida com um dos professores da graduação, que auxiliou na formulação da proposta. O público-alvo são pacientes e profissionais da área de saúde

## 2 - Pré-requesitos :desktop_computer:

|[<kbd>VS Code</kbd>](READMEAUX/VSCODE.md)|[<kbd>Python</kbd>](READMEAUX/PYTHON.md)|
| :---: | :---: |
|[<kbd>NVM</kbd>](READMEAUX/NVM.md)|[<kbd>ANGULAR</kbd>](READMEAUX/ANGULAR.md)|

## Como rodar a aplicação ▶️

<details>
 
 <summary> Permitindo que o code rode scrip </summary>
 
 > Abra o `PowerShell` como administrador
 > 
 > ```
 >  PS C:\Users\USER> Get-ExecutionPolicy
 >  Restricted
 > 
 >  PS C:\Users\USER> Set-ExecutionPolicy RemoteSigned
 >  Digite S
 >  PS C:\Users\USER> Get-ExecutionPolicy
 >  RemoteSigned
 > ```
 
</details>

### Clonando repositório:

<details>
 
 <summary> Como clonar detalhado </summary>
 
 > Crie uma pasta
 > 
 > <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/1223f836-ec56-44d3-a04d-15e83ce333ec width="700" >
 > 
 > Clone o repositório na pasta criada ▶️ clique com o `botão direito` dentro da pasta e clique em `git bash`
 > 
 > <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/7243c2f2-1713-4b62-94ae-74b4f429d3a5 width="700" >
 
</details>

```
$ git init
$ git clone "https://github.com/CamilaCSilva/tcc.git"
``` 
> Abra a pasta criada Com o VSCode ▶️ clique com o `botão direito` dentro da pasta e clique em `Abrir com Code`
> 
> <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/72d58390-32ba-4db1-929b-a156630ab498 width="700" >


<details>
 
 <summary><h1> Como Rodar o Frontend 🖥️ </h1></summary>
 
 Abra o terminal com os comando: <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>'</kbd>
 
 Agora execute os seguintes comandos
 ```
  cd .\tcc\front-end\
  npm install
  npm start ou ng s
 ```
 <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/a7d368a8-b263-4888-8d3a-a6991095f5ed width="700" >
 
 <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/d08264c6-f543-41ee-a0a6-63f86999d577 width="700" >
 
 
 Abra o navegado e acesso o link: http://localhost:4200/
 
 __Inserir foto da pagina de login__

</details>

<details>

 <summary><h1> Como Rodar o Backend 🌐 </h1></summary>
 
 Abra outro terminal com os comando: <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>'</kbd>
 
 Agora execute os seguintes comandos
 ```
  cd .\tcc\back-end\
  python -m venv venv
  venv/Scripts/Activate
  pip install -r requirements.txt
  python manage.py runserver
 ```
 <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/96a8980f-a015-4913-a9be-1c921cdb1adf width="700" >
 
 <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/a355e24f-085b-4ddd-8a4d-12197008ae2a width="700" >
 
 
 Abra o navegado e acesso o link: http://127.0.0.1:8000/anamnese/ e http://127.0.0.1:8000/profissionaldesaude/
 
 Para realizar o login o usuário é admin e a senha é admin123
 
 <img src=https://github.com/CamilaCSilva/tcc/assets/85804680/2eca0bae-7bf0-4f80-9490-27d47e6a1472 width="700" >

</details>

## 3 - Onde o usuário consegue achar ajuda 	:sos:

|**Email para contato**       |
|-----------------|
|camila.silva@ges.inatel.br|
|isadora.bello@gec.br|
|m.chagas@gec.inatel.br|

## 4 - Autores :curly_haired_man:
 
| **Nome**        |
|-----------------|
| [Camila](https://github.com/CamilaCSilva)|
| [Isadora](https://github.com/isadorabello) |
| [Matheus Chagas](https://github.com/Matheusilva431) |
