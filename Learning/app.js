console.log('Hello World!');
let name='Himanshu';
console.log(name);
const age=19;
console.log(age);
let f=true;
console.log(f);
let nothing;
console.log(nothing);
let sex=null;
console.log(sex);
let a=['0','1','2'];
console.log(a);
let num=[1,3,6,3,5,7];
console.log(num[0]+num[1]);
console.log(num.sort());
num.push(5);
console.log(num);
let mix=['1',1,true];
console.log(mix);
let obj={
    n:'Himanshu Sharma',
    s:'Male',
    i:0
}
console.log(obj.n);
let emily={
    age1:16,
    school:'DPS',
    subjects:['Maths','Physics','English','Social Studies']
}
console.log(emily.subjects[2]);
function hello(){
    console.log('Hello World!')
}
hello();
function multiply(a,b){
    return a*b;
}
console.log(multiply(3,7));
let v=[1,2,3,4,4,3,2,1];
if(v[0]==v[7]){
    console.log('True');
}
if(v[0]==v[1]){
    console.log('True');
}
else{
    console.log('False');
}
if(v[0]==v[7]&&v[2]==v[5]){
    console.log('Correct');
}
if(v[0]==v[3]||v[0]==v[5]){
    console.log('Correct');
}
let i=0;
while(i<5){
    console.log('The number is '+i);
    i++;
}