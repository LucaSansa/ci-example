const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-5, 20))
                .toBe(-1);
        });
    });

    describe('gerarNumeroAleatorio', () => {
        test('inicio nao pode ser maior que fim', () => {
            expect(gerarNumeroAleatorio(20, 2))
                .toBe(-1);
        });
    });



    describe('gerarNumeroAleatorio', () => {
        test('inicio e fim nao pode ser iguais', () => {
            expect(gerarNumeroAleatorio(5, 5))
                .toBe(-1);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
    });

    describe('acharCaracter', () => {
        test('comprimento fornecido diferente do comprimento real', () => {
            expect(acharCaracter(5, 'abc', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });
    });

    describe('acharCaracter', () => {
        test('retorna a posicao do caracter quando encontrado', () => {
            expect(acharCaracter(3, 'abc', 'c'))
                .toBe(2);
        });
    });

    describe('acharCaracter', () => {
        test('mensagem indicando que o caractera nao esta presente na cadeia', () => {
            expect(acharCaracter(3, 'abc', 'd'))
                .toBe('caracter nao esta presente');
        });
    });
    
    
});