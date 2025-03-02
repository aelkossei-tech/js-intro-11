const objects = ['Pen', 'Eraser', ' Board', 'Paper']; 

// You can use for loops to iterate arrays BUT for...of is BETTER 
//for(let i = 0; i < objects.length; i++){
    //console.log(objects[i]); 
//}

// for...of loop 
let countStartP = 0; 

for(let obj of objects){ // for...of loop have meaningful names instead of using of "i" [like for loops]
    console.log(obj); 
    if(obj.startsWith('P')) countStartP++; 
}
console.log(countStartP); // 2 


const salaries = [1200.32542, 1500.345, 3000.349857]

for(const salary of salaries) {
    console.log(salary.toFixed(2)); 
}

const students = [
    {
        fname: 'John', 
        age: 25
    },
    {
        fname: 'Jane', 
        age: 24
    }
]
for(const stud of students){
    
}