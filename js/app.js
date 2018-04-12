var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flicker.com');
    this.nicknames = ko.observableArray([
        { name: 'Mr. T' },
        { name: 'The Terminator' },
        { name: 'Tabbilicious' }
    ]);

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };

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

ko.applyBindings(new ViewModel());