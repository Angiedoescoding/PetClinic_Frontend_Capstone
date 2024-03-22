import Navbar from './Navbar'

function GreetingMain() {
  return (
    <div>
        <Navbar />
        <div className="greeting">
            {/* <img src={} alt="Pets" /> */}
            <h1>Welcome to _Clinic Name_!</h1>
            <p>[Brief introduction text about the clinic]</p>
            <p>**Our Motto:** _Clinic's Motto_</p>

            </div>
    </div>
  )
}

export default GreetingMain