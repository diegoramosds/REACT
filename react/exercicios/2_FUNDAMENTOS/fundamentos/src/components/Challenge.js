const Challenge = () => {

const num1 = 2;
const num2 = 5;

function handleClick() {
   console.log(num1 + num2)
}
  

return (
    <div>
        <p>A:{num1} B:{num2}</p> 
        <button onClick={handleClick} >soma</button>
    </div>
)}
export default Challenge
