var profession
var voterId 
var adharCard = false
var rationCard = false
var panCard = false
var votingCity
var votingState
var currentSatisfaction
var scopeOfImprovement=[]
var party
var yearOfVoting

const whoareyou= (value)=>{
    profession = value
    console.log(profession)
}

const voterIdValue= (value)=>{
    voterId = value
    console.log(voterId)
}

const adharCardValue= ()=>{
    adharCard = !adharCard
    console.log(adharCard)
}
const rationCardValue= ()=>{
    rationCard = !rationCard
    console.log(rationCard)
}
const panCardValue= ()=>{
    panCard = !panCard
    console.log(panCard)
}

const satisfaction= (value)=>{
    currentSatisfaction = value
    console.log(currentSatisfaction)
}

const improvScope= (value)=>{
    if(scopeOfImprovement.includes(value)){
        scopeOfImprovement.splice(scopeOfImprovement.indexOf(value),1)
    }else{
    scopeOfImprovement.push(value)
    }
    console.log(scopeOfImprovement)
}

const partyVoted= (value)=>{
    party = value
}


const state=document.querySelector('.voteState')
state.addEventListener('change',(e)=>{
    votingState= e.target.value
    console.log(e.target.value)
})

const city=document.querySelector('.voteCity')
city.addEventListener('change',(e)=>{
    votingCity= e.target.value
    console.log(e.target.value)
})

const votingYear=document.querySelector('.yearOfVoting')
votingYear.addEventListener('change',(e)=>{
    yearOfVoting = e.target.value
    console.log(e.target.value)
})


const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click',async(e)=>{
    e.preventDefault()

    let data = {
        name: document.querySelector('.userName').value,
        email: document.querySelector('.email').value,
        profession: profession,
        phone: parseInt(document.querySelector('.phone').value),
        sex: document.querySelector('.sex').value,
        dob: document.querySelector('.date').value,
        voterId: voterId,
        adharCard: adharCard,
        rationCard: rationCard,
        panCard: panCard,
        votingCity: votingCity,
        votingState: votingState,
        address: document.querySelector('.address').value,
        currentSatisfaction: currentSatisfaction,
        scopeOfImprovement: scopeOfImprovement,
        year: yearOfVoting,
        votedParty: party,
    }
    console.log(data)

    const res = await axios.post("https://survery-system-api.herokuapp.com/api/survey/surveydata",data)
    console.log(res)
})