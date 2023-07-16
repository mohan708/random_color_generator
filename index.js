const  getColor  = () =>
{
    const randonnumber =  Math.floor(Math.random()*16777215);
    const generate="#" + randonnumber.toString(16);
   // console.log(randonnumber,generate);
    document.getElementById('content').innerText=generate;
    document.body.style.background=generate;
}
document.getElementById('btn').addEventListener("click",getColor);

getColor();