def on_gesture_shake():
    led.stop_animation()
    basic.clear_screen()
    basic.pause(200)
    if randint(0, 2) == 0:
        blockchain.add_block(0)
        basic.show_icon(IconNames.DIAMOND)
    else:
        basic.show_icon(IconNames.ASLEEP)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
