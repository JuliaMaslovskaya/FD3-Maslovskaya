var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.storage = _storage;
    }
    Scales.prototype.addItem = function (item) {
        this.storage.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var sc = 0;
        var items = this.storage.getCount();
        for (var i = 0; i < items; i++) {
            sc += this.storage.getItem(i).getScale();
        }
        return sc;
    };
    Scales.prototype.getNameList = function () {
        var names = [];
        var items = this.storage.getCount();
        for (var i = 0; i < items; i++) {
            names.push(this.storage.getItem(i).getName());
        }
        return names;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        if (localStorage.length == 0) {
            localStorage.setItem('Scales', JSON.stringify([]));
        }
        var products = JSON.parse(localStorage.Scales);
        products.push(item);
        localStorage.Scales = JSON.stringify(products);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var products = JSON.parse(localStorage.Scales);
        var item = products[index];
        return new Product(item.name, item.scale);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var products = JSON.parse(localStorage.Scales);
        return products.length;
    };
    return ScalesStorageEngineLocalStorage;
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
var pr1 = new Product("Картошка", 450);
var pr2 = new Product("Помидор", 1830);
var pr3 = new Product("Огурец", 325);
var pr4 = new Product("Морковь", 560);
var pr5 = new Product("Яблоко", 800);
var pr6 = new Product("Груша", 1000);
var storage_Array = new ScalesStorageEngineArray();
var strage_localStorage = new ScalesStorageEngineLocalStorage();
var scales_Array = new Scales(storage_Array);
scales_Array.addItem(pr1);
scales_Array.addItem(pr2);
scales_Array.addItem(pr3);
console.log("Список добавленных продуктов в ScalesStorageEngineArray: " + scales_Array.getNameList().join('; '));
console.log("Суммарный вес продуктов = " + scales_Array.getSumScale() + "гр.");
var scales_localStorage = new Scales(strage_localStorage);
scales_localStorage.addItem(pr4);
scales_localStorage.addItem(pr5);
scales_localStorage.addItem(pr6);
console.log("Список добавленных продуктов в ScalesStorageEngineLocalStorage: " + scales_localStorage.getNameList().join('; '));
console.log("Суммарный вес продуктов = " + scales_localStorage.getSumScale() + "гр.");
//# sourceMappingURL=app.js.map