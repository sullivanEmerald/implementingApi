document.querySelector('button').addEventListener('click', getData)

async function getData(){
    try{
        const rapper = document.querySelector('input').value
        const res = await fetch(`https://rap-names-api-fun.herokuapp.com/api/${rapper}`)
        const data = await res.json()

        console.log(data)

        document.querySelector('#name').innerText = data.age
        document.querySelector('#birth').innerText = data.birthLocation
        document.querySelector('#other').innerText = data.birthName

        


    }catch(error){
        console.error(error)
    }
    

}