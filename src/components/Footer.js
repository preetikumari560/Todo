
// it's a normal javascript(.js) file so no need to import react


function Footer() {
  const date = new Date()

  const year = date.getYear()

  return <footer ><p>copyrightnpm audit
  ©{year}</p></footer>
  
}


export default Footer