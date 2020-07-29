class Celsius {
    degrees: number;

    /**
     * Celsius constructor
     * @param x Degrees
     */
    constructor(x: number) {
        if (!x && x !== 0 || typeof x !== "number") throw new Error(`Expected input to be a number, received ${typeof x}!`);
        this.degrees = x;
    }

    /**
     * Converts celsius to fahrenheit
     */
    toFahrenheit() {
        const fm = this.degrees ? (this.degrees * 9 / 5) + 32 : 0;
        return fm;
    }

    /**
     * Converts celsius to kelvin
     */
    toKelvin() {
        const fm = this.degrees ? this.degrees + 273.15 : 0;
        return fm;
    }

    /**
     * String representation of celsius
     */
    toString() {
        return `${String(this.degrees || 0)}°C`;
    }

}

export default Celsius;