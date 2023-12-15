// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000000001020202020202020202020300000000050f0f0f100f0f100f0f0f0400000000050f110f0f0f0f0f120f0f0400000000050f0f0f0f0f110f0f0f12040000000005120f0f0f10100f120f0f0400000000050f0f120f0f0f0f100f0f0400000000050f0f0f0f100f0f0f0f110400000000060707090f100f0f0a07070800000000000000050f0f120f040000000000000000000005120f0f10040000000000000000000005110f0f0f04000000000000010c0c0c0b0f120f0f0d02020203000005110f100f0f0f0f100f0f0f0f040000050f0f0f0f0f110f0f120f110f04000005120f1110120f0f0f110f0f0f040000060e0e0e0e0e0e0e0e0e0e0e0e0800`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 . . . . . . . . . . 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.floorDark0,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.floorDark5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
