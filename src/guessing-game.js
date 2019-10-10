class GuessingGame {
    constructor(min, max, middle) {
        this.min = null;
        this.max = null;
        this.middle = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.middle = Math.round(this.min + (this.max - this.min) / 2);

        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;