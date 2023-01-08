describe('powerFunction', () => {

    describe('Can make a power calculation', function () {
        function makeTest(x, n){
            let expected = x ** n;

            it(`${x} powered by ${n} equals ${expected}`, () => {
                assert.ok(expected == x ** n);
            });
        }

        for(x = 1; x <= 4; x++) {

            for(n = 2; n <= 4; n++) {
                makeTest(x, n);
            }

        }

    });

    describe('Returns NaN when needed', function () {

        it('should return nan for negative', function () {
            assert.isNaN(pow(3, -2));
        });

        it('should return nan for fractional', function () {
            assert.isNaN(pow(3, 7.2));
        });

    });

});