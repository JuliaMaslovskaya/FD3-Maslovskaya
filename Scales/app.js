var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.getName = function () {
        _super.prototype.getName.call(this);
        return this.name;
    };
    Apple.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
        return this.scale;
    };
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tomato.prototype.getName = function () {
        _super.prototype.getName.call(this);
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        _super.prototype.getScale.call(this);
        return this.scale;
    };
    return Tomato;
}(Product));
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