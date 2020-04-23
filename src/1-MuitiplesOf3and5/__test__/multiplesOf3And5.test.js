import multiplesOf3And5 from "../multiplesOf3And5";

describe("Multiples of 3 and 5", () => {
    it("Should find the sum of the multiples of 3 and 5 below given number correctly", () => {
        expect(multiplesOf3And5(10)).toEqual(23);
        expect(multiplesOf3And5(15)).toEqual(45);
        expect(multiplesOf3And5(20)).toEqual(78);
        expect(multiplesOf3And5(50)).toEqual(543);
        expect(multiplesOf3And5(100)).toEqual(2318);
        expect(multiplesOf3And5(200)).toEqual(9168);
        expect(multiplesOf3And5(500)).toEqual(57918);
        expect(multiplesOf3And5(1000)).toEqual(233168);
    });
});
