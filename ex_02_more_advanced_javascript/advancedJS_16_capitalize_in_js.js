const toCapital = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" "); // return word, that is the first element of word ([0]) capitalized + whatever content staritng in the second position ([1]).
};

const shortStr = "Hi there";
toCapital(shortStr); // Hi There

const longStr = "the quick brown fox jumped over the lazy dog";
toCapital(longStr); // The Quick Brown Fox Jumped Over The Lazy Dog