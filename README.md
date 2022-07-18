# SuperApp WK!

Esse projeto foi feito com NodeJS e React, o objetivo é criar uma API que cadastre, edite e exclua um usuário onde o usuário deve passar por um processo de autenticação com link único. A autenticação é feita com StytchAPI e a persistência de dados é feita com Firebase.

## Como rodar? 



### `npm start`

Dentro da pasta ./superapp, rode o `npm start` para rodar o front-end e dentro da pasta ./server, rode com 'yarn start' .\
Abra [http://localhost:3000](http://localhost:3000) para ver no browser.

O aplicativo pedirá por seu e-mail para enviar o link único de autenticação, note que ele expirará em cinco minutos. E então, ao resgatar o código de autenticaçãi, você será redirecionado para a página `http://localhost:3000/usuarios` onde poderá criar, excluir e editar os usuários. 
