function Button({ text }) {
  return (
    <button className='buttons' onClick={() => { if (text === 'Output') alert('Button clicked') }}><b>{text}</b></button>
  )
}

function Navbar() {
  return (
    <div className='navbar'>
      <a href='http://localhost:5173'>
        <Button text={'Home'} />
      </a>
      <Button text={'Output'} />
    </div>
  )
}

function GetItem() {

}

function Output() {
  return (
    <>
      <Navbar />
      <Button text={'Fetch'} onClick={GetItem}/>
    </>
  )
}
export default Output