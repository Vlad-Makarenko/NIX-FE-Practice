# Task4
## isPowOfTwo 
Determines whether an arbitrary integer is a power of two using bitwise operations.
## findWord 
Finds the word containing the given substring.
## srtPad
Complements a string with another string up to the specified length. <br>
`input`     - input line; <br>
`fullLen`   - the length of the final line; <br>
`fillStr`   - string; <br>
`fillType`  - 'FILL_RIGHT', 'FILL_LEFT', 'FILL_BOTH'. <br>
```
strPad('star', 10, '_*_');                  // star_*__*_
strPad('star', 8, '_*_', 'FILL_LEFT' );     // _*__star
strPad('star', 8, '*', 'FILL_BOTH');        // **star**
```
## isData
Uses a regular expression to check whether the given string matches the following date format:
```
25-07-2021
25-7-2021
1-1-2021
2-12-1979
```
## splitNames
Using regular expressions converts a string of the type `"Lennon, John\nMcCartney, Paul\nHarrison, George\nStar,Ringo"` to 
```
John Lennon
Paul McCartney
George Harrison
Ringo Star
```