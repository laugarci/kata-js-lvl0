# kata-lvl0

Este repositorio contiene una serie de ejercicios de katas en JavaScript para practicar y mejorar tus habilidades de programación. El nivel de la Kata es para principiantes.

## Instrucciones de Uso

Sigue estos pasos para configurar y ejecutar las katas en tu entorno local:

1. Clona este repositorio en tu ordenador utilizando el siguiente comando: 
    `git clone git@github.com:laugarci/kata-js-lvl0.git`
3. Accede a la carpeta: 
    `cd kata-js-lvl0`
5. Instala las dependencias:
    `npm install`
7. Para ejecutar los tests:
    `npm test`
9. Enjoy!

# Solucion de errores

Si al ejecutar los tests, te aparece un error parecido a este:

    /run.js:129
         if (error?.stack) {
              ^
        SyntaxError: Unexpected token '.'
        [...]
1. Escribe el siguiente comando en la terminal: `npm install --save-dev jest@26`
2. Vuelve a intentar ejecutar npm test
