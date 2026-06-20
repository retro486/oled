function menu () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("Micro:Notes")
    for (let value of text_list) {
        OLED.writeStringNewLine(value)
    }
}
input.onButtonPressed(Button.A, function () {
    OLED.writeString("A")
})
input.onButtonPressed(Button.B, function () {
    OLED.writeString("B")
})
let text_list: string[] = []
music.setVolume(67)
music.play(music.stringPlayable("C D F - E C C - ", 120), music.PlaybackMode.InBackground)
OLED.init(128, 64)
text_list = ["View notes", "Remove notes", "New note"]
menu()
basic.forever(function () {
	
})
