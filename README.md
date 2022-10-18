
# Projeto Keepalive

 Sistema e Login destinado ao acesso de colaboradores da Compass.


![Logo](https://s3-alpha-sig.figma.com/img/0b75/d095/5fa6bf2ea0b7248747c430dccce9b9e6?Expires=1667174400&Signature=KKW0uOsbmvQ509sYrJ4ZoXe4mERak5tD64V~FtJUtzbuBTnYUg81zhmZElJpfNusypzIoyYdI132XpbZb6SzG8uagqWO4ClC4dX-a~KktSrb~VXhtr2-6OI2fAPFVZ9vZhxrABo~I3EDQw2UIsGFTK-1Y7naPPogZFPNuxOmLoRFBzmCvHl9iG8WbAcAEkpNjWxyUzwQw5tQfwmWjCuY4S2oaCcfcqQSDeuxpAmDOKywRF5xWkZmLrGaQpR3MltX3KsyvdJL82sW21yMhK-nNkT12uVUsKoQxZ3Krv~eUXO56LUljuAw4bMH7teqzDDzwHtDKyQLjSondFGOtWOfAA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)


## Funcionalidades

- `Login`: Ao informar o usuário e a senha corretos, o usuário consegue acessar a página home
- `Horário e data`: Informação de horário e data completa atualizada em tempo real
- `Clima/Tempo`: Usa-se a geolocalização atual do usuário ao logar para informar o clima e a localização atual da cidade - estado.
- `Temporizador de tempo logado em segundos`: Ao contador chegar a 600 segundos, o usuário deve confirmar o pop-up perguntando se deseja continuar logado, caso não a sessão é encerrada
- `Logout`: Ao clicar no botão "Logout" na tela home, o usuário consegue encerrar a sessão e retornar para a página de Login.
- `LocalStorage`: Informação de acesso do usuário é armazenado no localStorage(memória) do seu navegador. Podendo ser excluído caso o usuário confirme o pop-up de excluir os dados ao encerrar a sessão.
- `Continuar navegando`: Botão que permite o usuário coninuar navegando para a página de notícias da Uol
## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Jenyfferbastos/Projeto-Keepalive.git
```

Entre no diretório do projeto

```bash
  cd Projeto-Keepalive
```

Inicie o servidor

```bash
  Abra o arquivo index.html utilizando o Live Server do editor utilizado
```


## Stack utilizada

**Front-end:** HTML5, CSS3, JavaScript

# Autor

[<img src="https://avatars.githubusercontent.com/u/107883696?v=4" width=115><br><sub>Jenyffer Bastos Sacramento</sub>](https://github.com/Jenyfferbastos)

## APIs utilizadas

- `API de temperatura em tempo real`: https://www.weatherapi.com
## Libs utilizadas

- `Lib para exibir pop-up personalizados`: https://sweetalert2.github.io/
- `Lib utilizada para realizar requisições HTTP`:https://axios-http.com/ptbr/docs/intro