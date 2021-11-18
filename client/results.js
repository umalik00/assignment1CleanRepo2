function getItems(){
 
    fetch('http://localhost:3005/all').then((response) => {
        console.log(response+"HELO");
        response.json().then((data) => {
            console.log("K")
            let c = data
            console.log(c);
            for(let i = 0;i<10;i++){
                console.log(c[i])
            }
        });
        
    });
        
};



function loadItems() {

    // // let selector = document.querySelector('section')
    // let selector = document.createElement("ul");
    // selector.setAttribute("class", `items`);
    
    // console.log(selector)


    // const arr = ['name', 'age', 'email']
    // for (let i = 0; i < arr.length; i++) {
        
    //     const msg = document.createElement('li');
    //     // name.replace(/\W/g, '');
    //     msg.textContent = `${arr[i]}: ${msgText[arr[i]]}`
    //     msg.style.color = 'red';
    //     document.querySelector("div").appendChild(selector)
    //     selector.append(msg)

    }


