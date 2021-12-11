let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")



if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // how to save the url
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
    



function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}


deletebtn.addEventListener("dblclick", function(){
    // how to clear local storage
    localStorage.clear() 
    // how to clear myleads
    myLeads = []
    // how to clear the DOM
    render(myLeads)

})


inputBtn.addEventListener("click", function() {
    // how to save the input
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})






function getFirst(arr){
    return arr[0]
}

console.log(getFirst["cox", "box","fox"])



// HOW TO STORE ON LOCAL STORAGE
// localStorage.setItem("myLeads","www.examplelead.com")
// JSON.parse(localStorage.getItem("myLeads"))

// localStorage.clear() to clear the local storage





// let myLeads = `["www.awesomelead.com"]`

// string to array
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.fb.com")
// console.log(myLeads)

// array to string
// myLeads =   JSON.stringify(myLeads)
// console.log(typeof myLeads)



