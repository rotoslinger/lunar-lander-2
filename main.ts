controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 5
    mySprite.startEffect(effects.trail)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . 
. . . . . . . . . . f f 1 f 1 f 1 f f . 
. . . . . . . . . f f 1 1 1 f 1 1 1 f f 
. . . . . . f f f f 1 1 1 1 f 1 1 1 1 f 
. . . . . f 1 1 f f f f f f 1 f f f f f 
. . . . . . f f f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . f f f f f f f . . . . . . . . . . 
. . f f 1 f 1 f 1 f f . . . . . . . . . 
. f f 1 1 1 f 1 1 1 f f . . . . . . . . 
f f 1 1 1 1 f 1 1 1 1 f f . . . . . . . 
f f f f f f 1 f f f f f f . . . . . . . 
f f f f f f f f f f f f f . . . . . . . 
. f 1 f 1 1 1 1 1 f 1 f . . . . . . . . 
. f 1 f 1 1 1 1 1 f 1 f . . . . . . . . 
. f 1 1 f 1 1 1 f 1 1 f . . . . . . . . 
. . f 1 1 f 1 f 1 1 f . . . . . . . . . 
. . . f 1 1 f 1 1 f . . . . . . . . . . 
. . . . f 1 f 1 f . . . . . . . . . . . 
. . . . . f 1 f . . . . . . . . . . . . 
. . . . . . f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
    mySprite.ay = -4
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
    effects.clearParticles(mySprite)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . 
. . . . . . . . . . f f 1 f 1 f 1 f f . 
. . . . . . . . . f f 1 1 1 f 1 1 1 f f 
. . . . . . . . f f 1 1 1 1 f 1 1 1 1 f 
. . . . . . . . f f f f f f 1 f f f f f 
. . . . . . . . f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . 
. . . . . . . . . . f f 1 f 1 f 1 f f . 
. . . . . . . . . f f 1 1 1 f 1 1 1 f f 
. . . . . . . . f f 1 1 1 1 f 1 1 1 1 f 
. . . . . . . . f f f f f f 1 f f f f f 
. . . . . . . . f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
    mySprite.ay = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = -5
    mySprite.startEffect(effects.trail)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . f f f f f f f . . . . . . . . . . . 
. f f 1 f 1 f 1 f f . . . . . . . . . . 
f f 1 1 1 f 1 1 1 f f . . . . . . . . . 
f 1 1 1 1 f 1 1 1 1 f f f . . . . . . . 
f f f f f 1 f f f f f 1 1 f . . . . . . 
f f f f f f f f f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
    effects.clearParticles(mySprite)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . 
. . . . . . . . . . f f 1 f 1 f 1 f f . 
. . . . . . . . . f f 1 1 1 f 1 1 1 f f 
. . . . . . . . f f 1 1 1 1 f 1 1 1 1 f 
. . . . . . . . f f f f f f 1 f f f f f 
. . . . . . . . f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`)
})
let mySprite: Sprite = null
effects.starField.startScreenEffect()
scene.setBackgroundColor(12)
pause(2000)
game.splash("")
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f f . . 
. . . . . . . . . . f f 1 f 1 f 1 f f . 
. . . . . . . . . f f 1 1 1 f 1 1 1 f f 
. . . . . . . . f f 1 1 1 1 f 1 1 1 1 f 
. . . . . . . . f f f f f f 1 f f f f f 
. . . . . . . . f f f f f f f f f f f f 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
forever(function () {
    if (!(controller.down.isPressed() || controller.up.isPressed())) {
        mySprite.ay = 2
    }
})
