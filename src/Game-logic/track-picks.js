export default function trackPicks() {
    let picks = new Set();

    function addPick(number) {
        picks.add(number)
    }

    function checkPicks(number) {
        for(let i = 0; i < picks.length; i++) {
            if(picks[i] === number) return true;
        }
        return false;
    }

    function getSize() {
        return picks.length;
    }

    return {
        picks,
        getSize,
        addPick,
        checkPicks
    }
}