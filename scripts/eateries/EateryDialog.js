import { useEateris } from "./EateryProvider.js"
import {eateryHTML} from "./Eatery.js"

const contentTarget = document.querySelector(".eatery__buttonLoc")
const eateryDetails = document.querySelector(".eatery__details")
const eventHub = document.querySelector(".container")
const preview_eatery = document.querySelector(".preview_eatery")
let eateryObject = []

eventHub.addEventListener("eateryChosen", clickEvent => {
    
    const eateryChosen = clickEvent.detail.eateryChosen

    const eateries = useEateris()
    
    eateryObject = eateries.find(eatery => {
        if(eateryChosen === eatery.city){
            return true
        }
        return false
    }) 
    preview_eatery.innerHTML = `<div>${eateryObject.businessName}</div>`
})

export const EateryButton = () => {
    contentTarget.innerHTML = "<button id='eateryInfo'>Eatery Info</button>"
}
contentTarget.addEventListener("click", e=>{
    if (e.target.id === "eateryInfo"){
        eateryDetails.innerHTML = eateryHTML(eateryObject)
        eateryDetails.showModal()
    }
})  