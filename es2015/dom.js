
let element = document.createElement( 'div' )
document.body.appendChild( element )

element.style.position = 'absolute'
element.style.left = '0'
element.style.top = '0'
element.style.padding = '0.25em''
element.style.display = 'flex'
element.style.flexDirection = 'column'
element.style.flexWrap = 'wrap'
element.style.alignItems = 'flex-start'
element.style.alignContent = 'flex-start'

export default element
