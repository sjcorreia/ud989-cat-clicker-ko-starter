var catData = [
    {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flicker.com/photos/bigtallguy/434164568',
    nicknames: [
        { name: 'Mr. T' },
        { name: 'The Terminator' },
        { name: 'Tabbilicious' }
        ]
    },
    {
    clickCount: 0,
    name: 'Moony',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flicker.com/photos/bigtallguy/434164568',
    nicknames: [
        { name: 'Moon Moon' }
        ]
    },
    {
    clickCount: 0,
    name: 'Tiger',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flicker.com/photos/bigtallguy/434164568',
    nicknames: [
        { name: 'Robot Jones' }
        ]
    },
    {
    clickCount: 0,
    name: 'Bart',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flicker.com/photos/bigtallguy/434164568',
    nicknames: [
        { name: 'Bart the Fart' }
        ]
    },
    {
    clickCount: 0,
    name: 'Ziggy',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flicker.com/photos/bigtallguy/434164568',
    nicknames: [
        { name: 'Starman' }
        ]
    },
];

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
    var self = this;

    this.catList = ko.observableArray([]);
    catData.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };

    this.fetchCat = function (chosenCat) {
        self.currentCat(chosenCat);
    }

}

ko.applyBindings(new ViewModel());