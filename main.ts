for (let index = 0; index < 4; index++) {
    control.waitForEvent(0, 0)
}
music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
