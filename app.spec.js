/*
Q4. Using your favourite language and framework, please write a very simple unit test-case. 
Assume you're developing an application that consumes a third-party HTTP API, 
ensure your test proves that such application would handle http404 errors as expected. 
It doesn't matter what exactly that expected behaviour is, 
just show us how you structure a test and write expectations/assertions.
*/

/*
Answer: I will use a third-party HTTP API named Rest Countries (https://restcountries.eu/) 
in my express app and write a test case using jasmine with supertest library. Please see the test case below.
*/

const mainApp = require('./app.js').mainApp
const request = require('supertest');

describe("Route", () => {
    it("/country/xyz should return 404", (done) => {
        request(mainApp)
            .get('/country/xyz')
            .expect(404)
            .expect('content-type', /json/)
            .end((err, res) => {
                if (err) throw err;
                done()
            });
    });

    it("/country/hk should return country page with data about Hong Kong", (done) => {
        request(mainApp)
            .get("/country/hk")
            .query({ name: 'hk' })
            .expect(200)
            .expect('content-type', /json/)
            .expect([{ "name": "Hong Kong", "topLevelDomain": [".hk"], "alpha2Code": "HK", "alpha3Code": "HKG", "callingCodes": ["852"], "capital": "City of Victoria", "altSpellings": ["HK", "香港"], "region": "Asia", "subregion": "Eastern Asia", "population": 7324300, "latlng": [22.25, 114.16666666], "demonym": "Chinese", "area": 1104, "gini": 53.3, "timezones": ["UTC+08:00"], "borders": ["CHN"], "nativeName": "香港", "numericCode": "344", "currencies": [{ "code": "HKD", "name": "Hong Kong dollar", "symbol": "$" }], "languages": [{ "iso639_1": "en", "iso639_2": "eng", "name": "English", "nativeName": "English" }, { "iso639_1": "zh", "iso639_2": "zho", "name": "Chinese", "nativeName": "中文 (Zhōngwén)" }], "translations": { "de": "Hong Kong", "es": "Hong Kong", "fr": "Hong Kong", "ja": "香港", "it": "Hong Kong", "br": "Hong Kong", "pt": "Hong Kong", "nl": "Hongkong", "hr": "Hong Kong", "fa": "هنگ‌کنگ" }, "flag": "https://restcountries.eu/data/hkg.svg", "regionalBlocs": [], "cioc": "HKG" }])
            .end((err, res) => {
                if (err) throw err;
                done();
            });
    });
});