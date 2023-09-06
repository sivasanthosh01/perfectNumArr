// var arr=[2,4,5,3,6,28,67,496];
var arr=[];
var n=parseInt(prompt("Enter the length of array"));
for(let i=0;i<n;i++){
    arr[i]=parseInt(prompt("Enter the"+(i+1)+"array value"));
}
document.write("The given Array is["+arr+"]<br><br>");

function perfectNum(arr){

var Perfect=[];
var notPerfect=[];
for(let i=0;i<arr.length;i++){
    var sum=0;
    for(let j=1;j<arr[i];j++){
        if(arr[i]%j==0){
            sum=sum+j;
        }
    }
    if(sum==arr[i]){
        // document.write("The Perfect numbers from given array"+arr[i]+"<br>")
        Perfect.push(arr[i]);
    }
    else{
        // document.write("The Number is not Perfect"+arr[i]+"<br>");
        notPerfect.push(arr[i]);
    }
}
// if(Perfect.length>=1){
//     document.write("The perfect numbers from given array"+" "+Perfect+"<br>");
// }
// if(notPerfect.length>=1){
//     document.write("Not perfect numbers from given array"+" "+notPerfect);
// }
return Perfect;
}
var output=perfectNum(arr);
document.write("The Perfect Numbers from given array"+output)