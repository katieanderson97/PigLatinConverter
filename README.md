# PigLatinConverter
This is a javascript script that can convert individual words or a sentence into Pig Latin.

## The Rules of Pig Latin
The rules of Pig Latin are fairly simple, and work as follows:

If the word starts with a vowel (a, e, i, o, u), add "way" to the end of the word
  - Examples:
    - "aloha" --> "aloha-way"
    - "exact" --> "exact-way"

If the word has no vowels in it, add "ay" to the end of the word
  - Examples:
    - "rhythm" --> "rhythm-ay"
    - "sphynx" --> "sphynx-ay"

If the word has vowels, move all the letters up to the first vowel to the end of the word, and add "ay"
  - Examples:
    - "glove" --> "ove-glay"
    - "california" --> "alifornia-cay"
