export default function checkNextRound(round, track){
    if(round === 1) {
        if(track.getSize() >= 6) return true;
        return false;
    } else if (round === 2) {
        if(track.getSize() >= 10) return true;
        return false;
    } else if(round === 3) {
        if(track.getSize() >= 20) return true;
        return false;
    }
}