const token = window.localStorage.getItem("token")


const authTest = async ()=> {

    try{
        const res = await axios.get("https://survery-system-api.herokuapp.com/api/users/profile",{headers:{"authorization":window.localStorage.getItem("token")}})
        console.log(res)
        
        
        let user = document.querySelector('.userName')
        console.log(user)
        user.innerHTML = `${window.localStorage.getItem("user")}`
        
    }catch(err){
        console.log(err)
        window.location.href="./page-login.html"
    }
    
}

authTest()