

const resetCount = () => {
    let count = document.getElementById("count-value").innerHTML
    if(count > 0){
     document.getElementById("count-value").innerHTML = 0
    }

}

incrementCount = () => {
 document.getElementById("count-value").innerHTML++;
 console.log("incremented")
}

setClass = (c, cTwo, removeClass) => {
    const classToAdd = document.getElementById(c)
    classToAdd.classList.remove(removeClass)
    classToAdd.classList.add(cTwo)
}

onDrop = (event) => {
   incrementCount()
   const goat = document.getElementById("goat")
   const bucket = document.getElementById("bucket")
   //bucket.classList.add("bucket-image")
   goat.classList.add("not-visible")
   bucket.classList.add("bucket-animation")
   setTimeout(() => {
    setClass("goat", "goat-image", "not-visible")
    bucket.classList.remove("bucket-animation")
  }, "1000")
 

   
}

allowDrag = (ev) => {
    ev.preventDefault()
} 




//resetCount(count)

