
const { varString, varNum, emptyArr, returnParam, printHelloWorld} = require('./kata-lvl0');

describe('varString', () => {
  test('debería retornar una variable que contenga un string', () => {
    const result = varString();
    expect(typeof result).toBe('string');
  });
});

describe('varNum', () => {
  test('debería retornar una variable que contenga un número', () => {
    const result = varNum();
    expect(typeof result).toBe('number');
  });
});

describe('emptyArr', () => {
    test('deberia retornar un array vacio', () => {
        expect(emptyArr()).toEqual([]);
    })
});

describe('returnParam', () => {
    test('debería retornar lo mismo que se le pasa por parámetro', () => {
      const input = 'Hola, mundo!';
      const result = returnParam(input);
      expect(result).toEqual(input);
    });
  });

  describe("printHelloWorld", () => {
    it("debería imprimir 'Hello, world!' en la consola", () => {
      const originalLog = console.log;
      console.log = jest.fn();
      printHelloWorld();
      expect(console.log).toHaveBeenCalledWith("Hello, world!");
      console.log = originalLog;
    });
  });
  
