var arr=JSON.parse(localStorage.getItem("booked")) || []


showData(arr)

function showData(arr){
    let area=document.getElementById("user_Data")
    arr.forEach((el,index)=>{
       let card=document.createElement("div")
        
       let name=document.createElement("h1")
       name.innerText="Name:"+el.name
       let id=document.createElement("h3")
       id.innerText="ID:"+el.id
       let age=document.createElement("p")
       age.innerText="Age:"+el.age
       let from=document.createElement("p")
       from.innerText="From Station:"+el.from_station
       let to=document.createElement("p")
       to.innerText="To Station:"+el.to_station
       let date=document.createElement("p")
       date.innerText="Date:"+el.date
       let seat=document.createElement("p")
       seat.innerText="Seat:"+el.seat_type
       let otp=document.createElement("p")
       otp.innerText="OTP:"+el.otp
       
       card.append(name,id,age,from,to,date,seat,otp)
       area.append(card)

    })
}
