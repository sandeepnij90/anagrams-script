function anagrams(word,words){
  const removed = words.filter(function(obj) {
    const anagram = obj.split('').sort().join();
    const checkAgainst =  word.split('').sort().join();
    if (anagram == checkAgainst) {
      return obj;
    }
  });
  return removed;
}

const words = ['crazer', 'carer', 'racar', 'caers', 'racer']; // potential anagrams
const word = 'racer'; // the word you are testing
console.log(anagrams(word,words));
