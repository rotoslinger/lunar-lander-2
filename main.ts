namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
d d d d d d d d d d d d d d d d 
d f d f f f d d d d d d d d d d 
d f d f d f d d d d d d d d d d 
d f d f d f d d d d d d d f f f 
d f d f f f d d d d d d d d f d 
d d d d d d d d f d f d d d f d 
f f f d f f f d d d f f f d f d 
f d f d f d f d f d f d f d f d 
f f f d f f f d f d f d f d f d 
f d d d d d d d d d d d d d d d 
f d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
f f f f d f f f d d d d d d d d 
f d d d d f d f d d d d d d d d 
f f f f d f d f d d d d d d d d 
d d d f d f d f d d d d d d d d 
d d d f d f d f d d d f f f d d 
f f f f d f f f d d d d f d f f 
d d d d d d d d f d d d f d f d 
f f f d f f f d f f f d f d f f 
f d f d f d f d f d f d f d d f 
f f f d f f f d f d f d f d f f 
f d d d d d d d d d d d d d d d 
f d d d d d d d d d d d d d d d 
f d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 10
    mySprite.startEffect(effects.trail)
    mySprite.setImage(img`
. . . . . . . f f f f f f f . . . . 
. . . . . . f f 1 f 1 f 1 f f . . . 
. . . . . f f 1 1 1 f 1 1 1 f f . . 
. . . f f f 1 1 1 1 f 1 1 1 1 f . . 
. . f 1 1 f f f f f 1 f f f f f . . 
. . . f f f f f f f f f f f f f . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
. . . f f f f f f f . . . 
. . f f 1 f 1 f 1 f f . . 
. f f 1 1 1 f 1 1 1 f f . 
f f 1 1 1 1 f 1 1 1 1 f f 
f f f f f f 1 f f f f f f 
f f f f f f f f f f f f f 
. f 1 f 1 1 1 1 1 f 1 f . 
. f 1 f 1 1 1 1 1 f 1 f . 
. f 1 1 f 1 1 1 f 1 1 f . 
. . f 1 1 f 1 f 1 1 f . . 
. . . f 1 1 f 1 1 f . . . 
. . . . f 1 f 1 f . . . . 
. . . . . f 1 f . . . . . 
. . . . . . f . . . . . . 
`)
    mySprite.ay = -10
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = 0
    effects.clearParticles(mySprite)
    mySprite.setImage(img`
. . . f f f f f f f . . 
. . f f 1 f 1 f 1 f f . 
. f f 1 1 1 f 1 1 1 f f 
f f 1 1 1 1 f 1 1 1 1 f 
f f f f f f 1 f f f f f 
f f f f f f f f f f f f 
`)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
. . . f f f f f f f . . 
. . f f 1 f 1 f 1 f f . 
. f f 1 1 1 f 1 1 1 f f 
f f 1 1 1 1 f 1 1 1 1 f 
f f f f f f 1 f f f f f 
f f f f f f f f f f f f 
`)
    mySprite.ay = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = -10
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
. . . f f f f f f f . . 
. . f f 1 f 1 f 1 f f . 
. f f 1 1 1 f 1 1 1 f f 
f f 1 1 1 1 f 1 1 1 1 f 
f f f f f f 1 f f f f f 
f f f f f f f f f f f f 
`)
})
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`18001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000030000000303000000000000000000000300030300030002000202000202020202020202020202020202020202000002000202020202`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . . . . . 2 . . . 2 2 
. . . . . . . . . . 2 . 2 2 . 2 . 2 . 2 2 . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.coral2,myTiles.tile3,myTiles.tile4],
            TileScale.Sixteen
        ))
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
info.setLife(5000)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (controller.down.isPressed() || (controller.right.isPressed() || controller.left.isPressed())) {
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (!(controller.down.isPressed())) {
        mySprite.ay = 5
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, myTiles.tile3)) {
        info.changeScoreBy(10)
        game.over(true)
    } else if (mySprite.tileKindAt(TileDirection.Left, myTiles.tile4)) {
        info.changeScoreBy(50)
        game.over(true)
    }
})
