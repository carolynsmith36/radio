input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    coins = blockchain.valuesFrom(blockchain.id()).length
    basic.showNumber(coins)
    basic.showString("coins")
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    basic.showNumber(blockchain.length())
    basic.showString("BLOCKS")
})
input.onGesture(Gesture.Shake, function () {
    led.stopAnimation()
    basic.clearScreen()
    basic.pause(200)
    if (randint(0, 2) == 0) {
        blockchain.addBlock(0)
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
let coins = 0
basic.showString("A=COINS B=CHAIN SHAKE=MINE")
