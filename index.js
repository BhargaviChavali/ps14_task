// 1 : Write a program to print the count of dup's in all the sub arrays
// input: [[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]]
// output: 4 duplicates 

// Code :
 
arr=[[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]];
let dup_c=0;
for(i of arr)
    {
        emp=[];
        for(j of i)
            {
                if(!emp.includes(j))
                    emp.push(j);
            }
            for(a of emp)
                {
                    let c=0;
                    for(b of i)
                        {
                            if(a==b)
                                c++;
                        }
                    if(c>1)
                        dup_c++;
                } 
        } 
console.log(dup_c+"  Duplicates Numbers");


// 2 :  Write a program to print the count of unique numbers in the array.
// input:[[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]]
// output:  4 unique numbers

// Code :

arr=[[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]];
let uni_c=0;
for(i of arr)
    {
        emp=[];
        for(j of i)
            {
                if(!emp.includes(j))
                    emp.push(j);
            }
            for(a of emp)
                {
                    let c=0;
                    for(b of i)
                        {
                            if(a==b)
                                c++;
                        }
                    if(c==1)
                        uni_c++;
                } 
        } 
console.log(uni_c+"  Unique Numbers");

