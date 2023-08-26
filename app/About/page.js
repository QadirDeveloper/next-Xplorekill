import React from 'react'
import Image from 'next/image'
import Header from '../(components)/header/header'
import Button from '../(components)/button/button'
export default function Page() {
  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <div className='headingabout'>
            <h1 >WE ARE THE WORLD'S LARGEST UNIVERSITY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
            <Button text="Explore Now" />
          </div>
          </div>
          <div className='col'>
          <Image src="/img/about.png" width={600} height={300} alt='not found' />
          </div>
        </div>
      </div>
    </div>
  )
}

