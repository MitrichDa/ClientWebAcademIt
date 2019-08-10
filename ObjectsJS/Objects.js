'use strict';

function City(name, population) {
    this.name = name;
    this.population = population;
    this.print = function () {
        return "Имя: " + this.name + " Население: " + this.population;
    }
}

function Country(name, cities) {
    this.name = name;
    this.cities = cities;
    this.print = function () {
        return "Имя: " + this.name + " Города: " + this.cities.map(
            function (value) {
                return value.print();
            }).join(", ");
    }
}

var countriesArray = [new Country("Russia", [new City("Moscow", 15000000), new City("Saint Petersburg", 5000000), new City("Novosibirsk", 1500000)]),
    new Country("USA", [new City("New York", 16000000), new City("Los Angeles", 10000000), new City("Saint Francisco", 12500000)]),
    new Country("Japan", [new City("Tokyo", 10000000), new City("Osaka", 3000000), new City("Kyoto", 1500000), new City("Fukuoka", 1300000)])];

var getCountriesWithMaxCitiesCount = function (countriesArray) {
    var citiesCountArray = countriesArray.map(function (country) {
        return country.cities.length;
    });
    var maxCitiesCount = Math.max(...citiesCountArray);

    return countriesArray.filter(function (value) {
        return value.cities.length === maxCitiesCount;
    });
};

var getCountriesInfo = function (countriesArray) {
    var result = {};

    var getPopulation = function (country) {
        return country.cities.reduce(function (population, city) {
            return population + city.population;
        }, 0)
    };

    countriesArray.forEach(function (country) {
        result[country.name] = getPopulation(country);
    });

    return result;
};
