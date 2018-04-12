var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.level = ko.computed(function () {
        if (this.clickCount() < 10) {
            return 'Newborn';
        }
        if (this.clickCount() < 30) {
            return 'Infant';
        }
        if (this.clickCount() < 60) {
            return 'Child';
        }
        if (this.clickCount() < 100) {
            return 'Teen';
        }
        if (this.clickCount() < 150) {
            return 'Adult';
        }
    }, this);
}

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flicker.com/photos/bigtallguy/434164568',
        nicknames: [
            { name: 'Mr. T' },
            { name: 'The Terminator' },
            { name: 'Tabbilicious' }
        ]
    }));

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());