import { animateTrack } from "../../BaseClasses/animateTrack.ts"
import { assignPlayerTrack } from "../../BaseClasses/assignPlayerToTrack.ts"
import { animateTrackBuilder } from "../../builders/animateTrackBuilder"

type playerAnimationType = {
    time?: number,
    timeEnd?: number,
    forTrack?: (x: animateTrackBuilder) => void
}

export class playerAnimation {
    constructor(public x: playerAnimationType) {  }

    push() {
        if(this.x.forTrack) {
            if(!this.x.time) this.x.time = 0
            if(!this.x.timeEnd) this.x.timeEnd = 10
            const trackVal = Math.random() * 10 - Math.random()
            const track = new animateTrack({
                time: this.x.time,
                duration: this.x.timeEnd - this.x.time,
                track: trackVal.toString()
            })
            this.x.forTrack(track)
            track.push()

            new assignPlayerTrack({ track: trackVal.toString(), time: this.x.time }).push()
        } else {
            console.warn(`No modifications were provided for track at ${this.x.time}, the player was not assigned to a track`)
        }
    }
}