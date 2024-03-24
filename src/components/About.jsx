import BrownCatBlackBg from '../assets/Browncatblackbackground.jpg'

function About() {
  return (
    <div>
    <section className="aboutSection">
      <div className="aboutContainer">
        <div className="textContainer">
          <h1 className="h1About">
            "Paws and Claws" — a professional veterinary service in Seattle.
          </h1>
          <p className="subtitleAbout">Treating animals since 1960.</p>
          <br />
          {/* <button className="appointmentBtn">Book an appointment</button> */}
          <p className="subtitleAbout2">At our clinic we provide emergency and <br /> routine care for animals.<br />Carefully, professionally, and with love.</p>
        </div>
        
      <div className="aboutImgContainer">
        <img src={BrownCatBlackBg} alt="Cat on dark background" className="browCatBlackBg" />
      </div>
      </div>
    </section>
    </div>
  )
}

export default About