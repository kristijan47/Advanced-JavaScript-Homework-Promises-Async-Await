// // Task 1:
// // Write a function testNumber() that takes a number as an argument and returns a Promise that tests if the value is less than or equal to 10. 
// // If it is, it's successful, if not it should be rejected.
// // (The function should wait at least 2 seconds to do the calculation).


function testNumber (number){
  
    return new Promise ((resolve,reject) =>{
      if (number <=10){
        setTimeout(()=>{
        resolve ('Success')
      },2000)
      }
        setTimeout(()=>{
        reject('Rejected')
      },2000)
      
      
      })
    }
      console.log(testNumber(11))


// // Task 2:
// //1. Write a function changeAllToCaps() that will take an array of words (strings), make them all caps. 
// //Be sure to check if all the items in the array are strings. If at lest one is not a string, reject this promise, 
// //if all are strings return the array as changed.

// //2. Write a function that will take an array of words (strings),
// // and sort them alphabetically in an ascending order (A, B, C...). Check if there are 2 of more words in the array. 
// //If there is 1 or less, log that there are not enough words to be sorted. If there are enough words, return them as sorted.

// //3. Connect these functions by chaining, log the array at the end. 
// //Handle any errors, and print out the time needed to complete these operation 
// //(each function should wait at least 2 seconds before returning value).

// //Bonus: Complete the same tasks with async/await.


// //Task 2
let arrayOfWords = ['Greg', 'James', 'Mark', 'Eric', 'Lisa']
function changeAllToCaps(){
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    for (let i =0; i < arrayOfWords.length; i++){
      if (typeof arrayOfWords[i=== 'string']){
        arrayOfWords[i] =arrayOfWords[i].toUpperCase();
      }
    }
    resolve (arrayOfWords)
  },2000)
  setTimeout(()=>{
    reject( 'Rejected')
  },2000)
  })
}

function sortAlphabeticallyAscending(){
  if (arrayOfWords <= 1){
    setTimeout(()=>{
    console.log('Not enough words to be sorted')
  })
  }
  setTimeout(()=>{
  return arrayOfWords.sort()
},2000)
}
// console.log(changeAllToCaps())
// console.log(sortAlphabeticallyAscending(arrayOfWords))


changeAllToCaps(arrayOfWords).then(arrayOfWords =>{
  sortAlphabeticallyAscending(arrayOfWords);
  console.log(arrayOfWords)
})
.catch(error =>{
  console.log(error)
})

//Bonus Task
  async function testNumber (number){
    return  await new Promise ((resolve,reject) =>{
      if (number <=10){
        setTimeout(()=>{
        resolve ('Success')
      },2000)
      }
        setTimeout(()=>{
        reject('Rejected')
      },2000)
      
      
      })
    }
      console.log(testNumber(5))


//Task 2
let arrayOfWords = ['Greg', 'James', 'Mark', 'Eric', 'Lisa']

async function changeAllToCaps(){
  return await new Promise ((resolve,reject)=>{
    setTimeout(()=>{
    for (let i =0; i < arrayOfWords.length; i++){
      if (typeof arrayOfWords[i=== 'string']){
        arrayOfWords[i] =arrayOfWords[i].toUpperCase();
      }
    }
    resolve (arrayOfWords)
  },2000)
  setTimeout(()=>{
    reject( 'Rejected')
  },2000)
  })
}

function sortAlphabeticallyAscending(){
  if (arrayOfWords <= 1){
    setTimeout(()=>{
    console.log('Not enough words to be sorted')
  })
  }
  setTimeout(()=>{
  return arrayOfWords.sort()
},2000)
}
// console.log(changeAllToCaps())
// console.log(sortAlphabeticallyAscending(arrayOfWords))


changeAllToCaps(arrayOfWords).then(arrayOfWords =>{
  sortAlphabeticallyAscending(arrayOfWords);
  console.log(arrayOfWords)
})
.catch(error =>{
  console.log(error)
})