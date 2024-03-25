import React from 'react';
import { Link } from 'react-router-dom';
import Browndoginflowers from '../assets/Browndoginflowers.jpg';
import Dogandcatlayinginthegrass from '../assets/Dogandcatlayinginthegrass.jpg';
import Homelesspuppies from '../assets/Homelesspuppies.jpg';
import Catbehindbarbedwirefence from '../assets/Catbehindbarbedwirefence.jpg';
import Husky from '../assets/Husky.jpg';
import BlueParrots from '../assets/BlueParrots.jpg';

function GoodDeeds() {
  return (
    <div>
      
      <div className="goodDeedsParDiv">
        <p>
            Every day, countless animals around the world face dire situations, from abandonment to abuse, and from neglect to natural disasters. Your donation has the power to change their lives. By contributing to animal welfare organizations, you're not just giving money; you're offering hope, compassion, and a chance for a brighter future for these vulnerable creatures.
        </p>
        <p>
            Your donation can provide food, shelter, medical care, and rehabilitation for animals in need. It can support rescue missions, spaying and neutering programs, and educational initiatives aimed at preventing cruelty and promoting responsible pet ownership. Every dollar you give helps these organizations rescue, rehabilitate, and rehome animals, ensuring they have a second chance at life.
        </p>

        {/* API Resourses:

    -- https://api.rescuegroups.org/v5/public/docs // no API keys provided for now, pending for the devs team to reply */}
      </div>
      
      <h1 className='h1GoodDeeds'>Adopt. Don't shop.</h1>

      <h4 className='h4GoodDeeds'>Every help is priceless.</h4>

      <div className='containerGoodDeeds'>
        {/* item 1 */}
        <div className="item e2">
          <Link to="https://www.akc.org/akc-rescue-network/" target='_blank'>
            <img src={Browndoginflowers} alt="Dog in flowers" />
          </Link>
          <div className="text2">
            <h3 className='h3GoodDeeds'>AKC Rescue Network</h3>
            <p className='pGoodDeeds'>The AKC Rescue Network’s groups are unique in that the fostering/rehabilitation period lasts as long as is necessary before the dog is rehomed.</p>
        </div>
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        </div>

        {/* item 2 */}
        <div className="item e2">
          <Link to="https://www.pasadosafehaven.org/what-we-do/" target='_blank'>
            <img src={Dogandcatlayinginthegrass} alt="Dog and cat" />
          </Link>
          <div className="text2">
            <h3 className='h3GoodDeeds'>Pasado’s Safe Haven</h3>
            <p className='pGoodDeeds'>Pasado’s Safe Haven focuses on the most vulnerable animals – victims of cruelty and neglect, and those whose very survival depends upon social and/or legislative change.</p>
        </div>
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        </div>

        {/* item 3 */}
        <div className="item e2">
          <Link to="https://www.aspca.org/adopt-pet" target='_blank'>
            <img src={Homelesspuppies} alt="Homeless puppies" />
          </Link>
          <div className="text2">
            <h3 className='h3GoodDeeds'>ASPCA</h3>
            <p className='pGoodDeeds'>Adopting a pet in the New York City, Los Angeles, Asheville or Columbus area? The ASPCA’s wonderful adoptable dogs and cats are waiting for you right now!</p>
        </div>
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        </div>

        {/* item 4 */}
        <div className="item e2">
          <Link to="https://www.rainrescue-wa.org/mission" target='_blank'>
            <img src={Catbehindbarbedwirefence} alt="Cat behind fence" />
          </Link>
          <div className="text2">
            <h3 className='h3GoodDeeds'>Rescuing Animals in Need</h3>
            <p className='pGoodDeeds'>Most of their dogs and cats come from underfunded shelters in Washington and California, where animals can be euthanized anytime due to lack of space, poor health, or duration of stay.</p>
        </div>
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        </div>

        {/* item 5 */}
        <div className="item e2">
          <Link to="https://bigdogrescueproject.org" target='_blank'>
            <img src={Husky} alt="Husky" />
          </Link>
          <div className="text2">
            <h3 className='h3GoodDeeds'>Big Dog Rescue Project</h3>
            <p className='pGoodDeeds'>BDRP is a small close knit group of independent dog rescuers that came together to form an organization devoted to saving dogs from the multitudes of high kill shelters in the DFW (Texas) area.</p>
        </div>
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        </div>

        {/* item 6 */}
        <div className="item e2">
          <Link to="https://www.packgives.org" target='_blank'>
            <img src={BlueParrots} alt="BlueParrots" />
          </Link>
          <div className="text2">
            <h3 className='h3GoodDeeds'>AKC Rescue Network</h3>
            <p className='pGoodDeeds'>The AKC Rescue Network is the largest network of dog rescue groups in the country, and was officially recognized by the American Kennel Club in late 2013. One hundred sixty unique breeds are currently represented within the network.</p>
        </div>
        <div className="line top"></div>
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line right"></div>
        </div>


      </div>



    </div>
  )
}

export default GoodDeeds



