let keys = document.querySelectorAll(".keys");
keys.forEach((key)=>{
    key.addEventListener('mouseover',()=>{
        keys.classlist.add("change");
    })
})