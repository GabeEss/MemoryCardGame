import shuffleArray from "./shuffle-array";

test('shuffleArray shuffles the array randomly', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const shuffled = shuffleArray(input);
    
    console.log(shuffled);

    // Check that the shuffled array has the same length as the input array
    expect(shuffled).toHaveLength(input.length);
    
    // Check that the shuffled array is not in the same order as the input array
    expect(shuffled).not.toStrictEqual([1, 2, 3, 4, 5, 6]);

    // Check that the shuffled array contains all the same elements as the input array
    expect(shuffled.sort()).toEqual(input.sort());
  });
  