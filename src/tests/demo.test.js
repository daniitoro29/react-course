describe('Pruebas demoComponent' , () => {

    test('Prueba', () => {
        const message = "Hola mundo";
        const message2 = message.trim();
        expect(message).toBe(message2);
    })
})
