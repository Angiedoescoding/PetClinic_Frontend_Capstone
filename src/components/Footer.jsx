import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">

      <div className="footerContent">
          <div className="schedule">
            <h3>Clinic Schedule</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 1:00 PM</p>
            <p>Sunday: Closed</p>
            <p>Emergency: On-call</p>
          </div>

          <div className="addressContacts">
            <h3>Address & Contacts</h3>
            <p>123 Pethealth Street</p>
            <p>Seattle, WA, 98000</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@clinic.com</p>
          </div>

          <div className="subscribeForm">
            <h3>Subscribe to Our Emails</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="copyright">
          <p>&copy; 2024 Paws and Claws. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer