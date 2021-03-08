class Letter {
    constructor(letter) {
        this.letter = letter;
    }

    newLetter() {
        if (this.letter === " ") {
            this.letter = true;
            return " ";
        } else {
            if (this.letter === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };
}

module.exports = Letter;
