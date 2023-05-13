import trackPicks from "./track-picks";
import makeChoice from "./make-choice";

describe("makeChoice", () => {
    let track;
  
    beforeEach(() => {
      track = trackPicks();
    });
  
    test("makeChoice should return false if the number has not been picked before", () => {
      expect(makeChoice(1, track)).toBe(false);
      expect(track.checkPicks(1)).toBe(true);
    });
  
    test("makeChoice should return true if the number has been picked before", () => {
      track.addPick(1);
      expect(makeChoice(1, track)).toBe(true);
    });
  });
  