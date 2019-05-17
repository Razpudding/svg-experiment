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
const triang_lefts = Array.from(document.querySelectorAll("#triang_x5F_left path"))
const triang_rights = Array.from(document.querySelectorAll("#triang_x5F_right path"))
const third_eye = document.querySelector('#third_x5F_eye')
const disco_eye = document.querySelector('#disco_x5F_eye')

let allHidden = true
//triang_lefts.forEach(t => t.addEventListener("mouseover", makeGolden))
//triang_lefts.forEach(t => t.addEventListener("mouseout", makeBlack))
third_eye.addEventListener("click", function(){flashAnim(triang_lefts)})
disco_eye.addEventListener("click", function(){lightEmUp(allPaths)})
//svg.addEventListener("click", function(){showOnebyOne(allPaths)})



orderBy(triang_lefts, 'y', false)
orderBy(triang_rights, 'y', true)
// svg.addEventListener("click", function(){lightEmUp(triang_lefts)})
svg.addEventListener("click", function(){paintIt(triang_lefts, 'goldenrod')})
svg.addEventListener("click", function(){paintIt(triang_rights, 'goldenrod')})


function orderBy(arr, prop, ascending){
  if (ascending) return arr.sort((a, b) => a.getBoundingClientRect()[prop] - b.getBoundingClientRect()[prop])
  else return arr.sort((b, a) => a.getBoundingClientRect()[prop] - b.getBoundingClientRect()[prop])
}
   

function showOnebyOne(arr){
  //console.log("triggered") 
  arr.forEach((t,i) => {
    setTimeout(() => t.style.display = "block", 50 * i)
  })
  allHidden = false
}

function lightEmUp(arr){
  const seed = Math.floor(Math.random() * 3)
  arr.forEach((t, i) => {
    setTimeout(() => t.style.fill = colors[(i+seed)%3], 20 * i)
  })
}

function flashAnim(arr){  
  arr.forEach((t, i) => {
    setTimeout(() => t.style.fill = "goldenrod", 50 * i)
  })
}

function paintIt(collection, color){
  let elements = Array.isArray(collection) ? collection : [collection]
  elements.forEach((t, i) => {
    setTimeout(() => t.style.fill = color, 20 * i)
  })
}