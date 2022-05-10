basic.forever(function () {
    if (true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Surprised)
    }
})
