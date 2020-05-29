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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let myEnemy = sprites.create(img`
. . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . . 
. . . . . . . . . . f b b b b b b b f f c b b b b f . . . . . . . . . . 
. . . . . . . . . . f b b 1 1 1 b b b b b f f b f . . . . . . . . . . . 
. . . . . . . . . . f b 1 1 1 1 1 f f b b b b f f . . . . . . . . . . . 
. . . . . . . . . . f 1 c c c c 1 f f b b b b b c f 1 . . . . . . . . . 
. . . . . . . . . . f f c 1 c 1 c 1 b b c b c b c c c f . . . . . . . . 
. . . . . . . . . . . f c c 3 3 3 1 b b b c b c b c c c f . . c c c c c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b c b c b c c c c f c d d b b c 
. . . . . . . . . . . . c 3 3 3 c 1 b b b b b b b c c c c c d d b c c . 
. . . . . . . . . . . . c 3 3 3 c 1 1 b b b b b c c c c c c b b c c . . 
. . . . . . . . . . . c c 3 3 1 c 1 1 b b b b c c c c c c f b c c f . . 
. . . . . . . . . . . c c 1 3 c 1 1 c b b b c c c c c b b c f c c f . . 
. . . . . . . . . . . c 1 1 1 1 1 1 c b b b f d d d d d c . f b b c f . 
. . . . . . . . . . . . c c 1 1 1 1 f b d b b f d d d c . . . f b b f . 
. . . . . . . . . . . . . . c c c f f f b d b b f c c . . . . . f b b f 
. . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f 
`, SpriteKind.Enemy)
let snail = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . c c c c 6 3 c . . 
. . . . . . c 6 3 3 3 3 6 c . . 
. . . . . c 6 6 3 3 3 3 3 3 c . 
. . . . c 6 6 6 6 3 3 3 3 3 3 c 
. c c c c c 6 6 c c 3 3 3 3 3 c 
b 5 5 c 3 3 c c 5 5 c 3 3 3 c c 
f f 5 c c c 3 c 5 f f 6 6 6 c c 
f f 5 c c c c c 5 f f 3 3 3 3 c 
. b 5 5 3 c 3 5 5 c 3 3 3 3 3 c 
. c 4 4 5 5 5 5 4 c c 3 3 3 c . 
c 4 5 5 4 4 4 4 5 5 4 c b b . . 
c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
. c c c c c c c c c . . c c c . 
`, SpriteKind.Player)
controller.moveSprite(snail, 10, 10)
snail.setFlag(SpriteFlag.StayInScreen, true)
snail.setPosition(0, 0)
myEnemy.follow(snail, 5)
game.showLongText("shark says \"I'm hungry for snails. oh, there's one!\"", DialogLayout.Bottom)
