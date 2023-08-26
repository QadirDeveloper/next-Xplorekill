
import React from 'react'
import Navbar from './(components)/navbar/navbar'
import Image from 'next/image'
import Button from './(components)/button/button'
export default function page() {
  return (
    <div>
      <section className='homeback'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='head'>
              <Navbar/>
                <h1>GET READY</h1>
                
                <h3>TO DISCOVER CAMPUS</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                  esse blanditiis in quae perspiciatis quo.</p>
                  
                <Button text="Visit us to know more" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 >EXPLORE OUR 60+
              MAJOR PROGRAMS</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className='row'>
          <div className='col-4'>
            <div className='cards'>
              <h4>Undergraduate Programs</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedi distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='cards'>
              <h4>Graduate Programs</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='cards'>
              <h4>Adult Learning & Degree Completion</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolor corporis, commodi nihil quas soluta labore quisquam impedit distinctio explicabo aut minima quos pariatur unde aliquam earum laborum velit non.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1 >TAKE OUR VIRTUAL TOUR</h1>
            <p className='para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Image src="/img/Campus1.png" width={300} height={200} alt='not found' />
          </div>
          <div className='col'>
            <Image src="/img/Campus2.png" width={300} height={200} alt='not found' />
          </div>
          <div className='col'>
            <Image src="/img/Campus3.png" width={300} height={200} alt='not found' />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h1>OUR FACILITIES</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='imagetext'>
        <div className='row'>
          <div className='col-4'>
            <Image src="/img/libary.png" width={300} height={200} alt='not found' />
            <h3>Best Libary</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
          </div>
          <div className='col-4'>
            <Image src="/img/playground.png" width={300} height={200} alt='not found' />
            <h3>Athletics</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
          </div>
          <div className='col-4'>
            <Image src="/img/food.png" width={300} height={200} alt='not found' />
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.</p>
          </div>
        </div>
      </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>WHAT OUR STUDENT SAYS</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

       
        <div className='row'>
          <div className='col'>
          <div className='paraend'>
          <Image src="/img/user.png" width={70} height={70} alt='not found' />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.</p>
            <h2>Student Name</h2>
          </div>
          </div>
          
          <div className='col'>
          <div className='paraend'>
          <Image src="/img/user.png" width={70} height={70} alt='not found' />
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime.</p>
            <h2>Student Name</h2>
            
          </div>
          </div>
        </div>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>


      <div className='backbellow'>
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button text="Continoue" />
      </div>



    </div>
  )
}
