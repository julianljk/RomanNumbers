/*
	Idea: There are only a few "contentious" numbers (the 9's and 4's), 
	if we're already hard coding the othe other numbers, we might as well do all of them as well. 
	This gives us a clean way to decrement the value and systematically add romans to our output string.
*/

function convertToRomanNum(number) {
    if(number === 0) {
        return "0";
    }
    let map = {  
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL', 
        50: 'L', 
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',  
        1000: 'M' 
    };
    let romans = "";

    Object.keys(map)    
        .sort( (a, b) => b - a) 
        .forEach( key => {
            while(number >= key) {
                number -= key; 
                romans = romans + map[key]; 
            }
        }); 
    return romans; 
}
