import trackPicks from "./track-picks";

describe("trackPicks", () => {
    let picks;
  
    beforeEach(() => {
      picks = trackPicks();
    });
  
    test("addPick should add a new pick to the set", () => {
      picks.addPick(1);
      expect(picks.picks.has(1)).toBe(true);
    });
  
    test("checkPicks should return true if a pick is in the set", () => {
      picks.addPick(1);
      expect(picks.checkPicks(1)).toBe(true);
    });
  
    test("checkPicks should return false if a pick is not in the set", () => {
      picks.addPick(1);
      expect(picks.checkPicks(2)).toBe(false);
    });
  
    test("getSize should return the size of the set", () => {
      picks.addPick(1);
      picks.addPick(2);
      expect(picks.getSize()).toBe(2);
    });
  
    test("reset should clear the set", () => {
      picks.addPick(1);
      picks.reset();
      expect(picks.getSize()).toBe(0);
    });
  });
  