import { round1, round2, round3 } from "./round-length";

export default function checkNextRound(round, track){
    if(round === 1) {
        if(track.getSize() >= round1) return true;
        return false;
    } else if (round === 2) {
        if(track.getSize() >= round2) return true;
        return false;
    } else if(round === 3) {
        if(track.getSize() >= round3) return true;
        return false;
    }
}