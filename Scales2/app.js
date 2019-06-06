var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (_prod) {
        this.products.push(_prod);
    };
    Scales.prototype.getSumScale = function () {
        var sc = 0;
        this.products.forEach(function (prod) {
            sc += prod.getScale();
        });
        return sc;
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        this.products.forEach(function (prod) {
            names.push(prod.getName());
        });
        return names;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    return Tomato;
}());
var pr1 = new Tomato("Черри", 450);
var pr2 = new Tomato("Семейный", 1830);
var pr3 = new Tomato("Сливка", 325);
var pr4 = new Apple("Белый налив", 560);
var pr5 = new Apple("Ранет", 800);
var pr6 = new Apple("Розовый налив", 1000);
var scales = new Scales();
scales.add(pr1);
scales.add(pr2);
scales.add(pr3);
scales.add(pr4);
scales.add(pr5);
scales.add(pr6);
console.log("Cуммарный вес продуктов = " + scales.getSumScale() + " гр.");
console.log("Список добавленных продуктов: " + scales.getNameList().join('; '));
//# sourceMappingURL=app.js.map