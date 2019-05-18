/* ideas:
* V Group relevant paths to be targeted with code later
* V Create interesting visual effects like rotating highlighted triangle, ripple of color, color on hover.
* - Add some buttons that allow different effects to be triggered
* - Create the effect of a rising sun behind the figure
* - Use Greensock to morph shapes (tring to circle?) and create scenes.
* - Clean up image. Clean up spots on body
*   - Identify top and bottom black half
*   - Select all remaining elements as the body 
* - Resources
*   - Use this as inspiration: https://observablehq.com/@lemonnish/svg-path-animations-d3-transition
*   - Morph triangles to circles using: https://bl.ocks.org/mbostock/3081153
*   - This might be useful as well: https://css-tricks.com/animating-svg-css/
*/

const colors = ['DAA520','4B2295', '263596', 'DAC320']
const svg = document.querySelector('svg')
const allPaths = Array.from(document.querySelectorAll("path"))
const triangles = Array.from(document.querySelectorAll("#triangles path"))
const triang_lefts = Array.from(document.querySelectorAll("#triang_x5F_left path"))
const triang_rights = Array.from(document.querySelectorAll("#triang_x5F_right path"))
const third_eye = document.querySelector('#third_x5F_eye')
const disco_eye = document.querySelector('#disco_x5F_eye')

let allHidden = true

third_eye.addEventListener("click", function(){flashAnim(triang_lefts)})
disco_eye.addEventListener("click", function(){lightEmUp(allPaths)})
//svg.addEventListener("click", function(){showOnebyOne(allPaths)})

orderBy(triang_lefts, 'y', false)
orderBy(triang_rights, 'y', true)
orderBy(allPaths, 'x', false)

svg.addEventListener("click", function(){
  paintIt(triang_lefts, 'goldenrod', 30)
    .then(() => paintIt(triang_rights, 'goldenrod', 30))
    .then(() => paintIt(allPaths, 'darkgreen', 10))
})
//svg.addEventListener("click", function(){paintIt(triang_rights, 'goldenrod', 100)})

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

function paintIt(collection, color, duration){
  //Fix: Can't wait for each of the timeouts. Probable solution here: https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
  return new Promise( (resolve,reject) => {
    let elements = Array.isArray(collection) ? collection : [collection]
    elements.forEach((t, i) => {
      setTimeout(() => t.style.fill = color, duration * i)
    })
    setTimeout(() => {  //DIRTY DIRTY HACKS
      console.log("done!")
      resolve(elements.length)
    }, duration * elements.length)
    console.log("All paints done?")
  })
}