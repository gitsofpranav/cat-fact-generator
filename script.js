const url ="https://catfact.ninja/fact";
let factPara = document.querySelector("#fact");
let get = document.querySelector("#btn");


const getFact = async() =>{
   let response = await fetch(url);
   console.log(response);
   let data = await response.json();
   factPara.innerText = data.fact;

}

btn.addEventListener("click" ,getFact);
