# OlhaOGás

## Instalação

Download: https://github.com/joaoapel/olhaogas

## Pré-requisito

Preciso para convertir ogg to wav

    $ sudo apt install ffmpeg

## Uso

Esta biblioteca foi criada com o intuito de utilizar frequências sonoras
para detectar a quantidade de gás no seu botijão.

Para tanto é só gravar a batida no meio do butijão com um pedaço de madeira.

Exportacao variavel de env

    $ export TG_API_KEY=[telegram api key from bot father]

Para rodar o projeto:

    $ lein run

    deve correr applicativo na port 9090

Para rodar os testes (por enquanto apenas testando a função principal):

    $ lein test

Para fazer a build do uberjar:

    $ lein uberjar

Rode o uberjar:

    $ java -jar olhaogas.jar

Connectar telegram webjook:

    $ curl -X GET (TG_API_BASE TG_API_KEY)/setWebhook?url=(your public domain:port)/tg-bot/medgascheck-v1"


## License

Copyright © 2021 Buzzlabs.br

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
