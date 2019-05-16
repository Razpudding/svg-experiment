/* ideas:
* V Group relevant paths to be targeted with code later
* - Create interesting visual effects like rotating highlighted triangle, ripple of color, color on hover.
* - Use Greensock to morph shapes (tring to circle?) and create scenes.
* - Clean up image. Clean up spots on body
*/

const colors = ['DAA520','4B2295', '263596', 'DAC320']
const svg = document.querySelector('svg')
const allPaths = document.querySelectorAll("path")
const triangles = document.querySelectorAll("#triangles path")
const triang_lefts = document.querySelectorAll("#triang_x5F_left path")
const third_eye = document.querySelector('#third_x5F_eye')
const disco_eye = document.querySelector('#disco_x5F_eye')

let allHidden = true
//triang_lefts.forEach(t => t.addEventListener("mouseover", makeGolden))
//triang_lefts.forEach(t => t.addEventListener("mouseout", makeBlack))
third_eye.addEventListener("click", flashAnim)
disco_eye.addEventListener("click", lightEmUp)
// svg.addEventListener("click", showOnebyOne)

function showOnebyOne(){
  //console.log("triggered") 
  allPaths.forEach((t,i) => {
    setTimeout(() => t.style.display = "block", 50 * i)
  })
  allHidden = false
}

function lightEmUp(arr){
  const seed = Math.floor(Math.random() * 3)
  allPaths.forEach((t, i) => {
    setTimeout(() => t.style.fill = colors[(i+seed)%3], 10 * i)
  })
}

function flashAnim(){  
  triang_lefts.forEach((t, i) => {
    setTimeout(() => t.style.fill = "goldenrod", 50 * i)
  })
}

function makeGolden(){
  //console.log("triggered", this)
  this.style.fill = "goldenrod"
}

function makeBlack(){
  this.style.fill = "black"
}