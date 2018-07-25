export class Color {

    private constructor(public readonly name: string) {
    }

    toCssString(): string {
        return `var(${this.name})`
    }

    static Gold = new Color("--color-gold")
    static Blue = new Color("--color-blue")
    static Red = new Color("--color-red")
    static Platinum = new Color("--color-platinum")
    static GreyLightest = new Color("--color-grey-lightest")
    static GreyLight = new Color("--color-grey-light")
    static Grey = new Color("--color-grey")
    static GreyDark = new Color("--color-grey-dark")
}