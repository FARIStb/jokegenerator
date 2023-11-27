const btnE1 =document.getElementById("btn");
const jokeE1= document.getElementById("joke");

const apikey="HwO6MJmYsePuNle1ukbccg==zE9enaA1GBBEjypO";

const option={
    method :"GET",
    headers:  {
        'X-Api-Key': apikey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

/*async function getjokes(){
    const Response= await fetch(apiURL,option);
    const data= await Response.json();     //we need to conver the data into json
    jokeE1.innerText = data[0].joke;

}
*/

const getJokes = async () => {
    const Response= await fetch(apiURL,option);
    const data= await Response.json();     //we need to conver the data into json
    jokeE1.innerText = data[0].joke; 
}

btnE1.addEventListener("click", getJokes);
