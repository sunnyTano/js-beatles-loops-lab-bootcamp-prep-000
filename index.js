// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
var newArr = [];
for(var i = 0; i<musicians.length; i++){
  newArr.push(`${musicians[i]} plays ${instruments[i]}`)
}
return newArr;
}


var facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
      ]
      
function johnLennonFacts(facts){
  var newArr = []
  var i = 0;
  while(i < facts.length){
    newArr.push(`${facts[i]}!!!`)
    i++
  }
  return newArr
}


function iLoveTheBeatles(num){
  var newArr = []
  do {
    newArr.push("I love the Beatles!")
    num++
  } while(num < 15){
      return newArr
  }
}
/*
  describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });

});

*/