import React from 'react'
import Image from 'next/image'
import Header from '../(components)/header/header'
import Button from '../(components)/button/button'
import Input from '../(components)/input/input'
export default function page() {
  return (
    <div>
      <section >
        <Header title="our post"/>
        
      </section>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h2>Our Certificate & Online Program</h2>
            <Image src="/img/post.png" width={600} height={400} alt='not found' className='post' />
          </div>
          <div className='col-'>
            <h1>Post Categories</h1>
            <p>Business Analytics      12</p>
            <p>Machine Learning       29</p>
            <p>Data Analytics        22</p>
            <p>Computer Science    15</p>
          </div>
        </div>
      <div className='row'>
        <div className='col-6'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio facilis?</p>
        </div>
        </div>
        <div className='row'>
        <div className='col-6'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio facilis?</p>
        </div>
        </div>
        <div className='row'>
        <div className='col-6'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio facilis?</p>
        </div>
        </div>
        <div className='row'>
        <div className='col-6'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio facilis?</p>
        </div>
      </div>
    </div>

  

    <div className="content-col">
            <form>
              <Input type="text" place="Enter Name" />
              <Input type="email" place="Enter Email" />
              <Input type="text" place="Enter Subject"/>
              <textarea rows="8" placeholder="Message" required></textarea>

              <Button text="Send Message" />
              
    </form>
</div>

    </div>
    
  )
}



