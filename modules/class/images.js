// var images = [
//     'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&h=350',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYqJCM5nbNAk9Z4C3rybPQFic9USLCCrIXejIgInn1L9bdHKu',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxE0iXm3ChXIonp7e0SaitdYMCK59OEN4MNQ7nldYAFoxvlp8b'
// ];
// var index = 0;

// module.exports = {
//     next: function(){
//         if (index === images.length - 1) return null;

//         index++;
//         return index;
//     },
//     prev: function() {
//         if (index === 0) return null;

//         index--;
//         return index;
//     }
// }

// function Images(){
//     this.index = 0
// }

// Images.prototype.next = function() {
//     this.index++;
//     return this.index;
// }

// Images.prototype.prev = function() {
//     this.index--;
//     return this.index;
// }

class Images {
    constructor() {
        this.index = 0;
    }
    next() {
        this.index++;
        return this.index;
    }
    prev() {
        this.index--;
        return this.index;
    }
}

module.exports = Images;