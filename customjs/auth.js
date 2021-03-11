

const login = async(e)=>{
    let name = document.querySelector('.user').value
    let password = document.querySelector('.password').value


    console.log({name:name,password:password})

    try{
        const res = await axios.post("https://survery-system-api.herokuapp.com/api/users/login",{name:name,password:password})
        console.log(res)
        window.localStorage.setItem("token" , res.data.token)
        window.localStorage.setItem("user" , res.data.user.name)
         window.location.href = "./"
    }catch(e){
        console.log(e)
    }
}

const register = async(e)=>{
    let name = document.querySelector('.user').value
    let password = document.querySelector('.password').value


    console.log({name:name,password:password})

    try{
        const res = await axios.post("https://survery-system-api.herokuapp.com/api/users/register",{name:name,password:password})
        console.log(res)
       
    }catch(e){
        console.log(e)
    }
}