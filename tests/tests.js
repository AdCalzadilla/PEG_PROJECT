var assert = chai.assert;

suite('temperature', function() {
    test('Prueba return3+2', function() {
        document.value = "main(){\na=3+2\nreturn a\n}";
        assert.deepEqual(OUTPUT.innerHTML, "5");
    });
    test('Prueba 2 funciones', function() {
        document.value = "func(){\na = 3\nb = a\nreturn b\n}\nmain(){\na = 3-2\nreturn a\n}";
        assert.match(OUTPUT.innerHTML, "1");
    });
    test('Fallo', function(){
      document.value = "Esto va a dar error."
        assert.match(OUTPUT.innerHTML, /ERROR/);
    });
});
