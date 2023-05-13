export default function trackPicks() {
    let picks = new Set();

    function addPick(number) {
        picks.add(number)
    }

    function checkPicks(number) {
        return picks.has(number);
    }

    function getSize() {
        return picks.size;
    }

    function reset() {
        picks = new Set();
    }

    return {
        picks,
        getSize,
        addPick,
        checkPicks,
        reset
    }
}