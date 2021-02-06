import React, { useState } from 'react'
import Section from '../components/Section'
import FormSmall from '../components/FormSmall'
import PageTitle from '../components/PageTitle'
import StaticImg from '../assets/map_placeholder.jpg'

const Search = () => {
  const [form, setForm] = useState({ pickup: '', destination: '' })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    console.log({ ...form })
  }
  const inputs = [
    { label: 'pickup', type: 'text' },
    { label: 'destination', type: 'text' },
  ]
  return (
    <>
      <Section className='bg-light' align='center'>
        <div className='col-lg-4 bg-dark color-white px-5 pt-4'>
          <PageTitle title='Routes' />
          <FormSmall
            btnText='Confirm'
            btnLink='/vehicles'
            inputs={inputs}
            setForm={setForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />

          {/* route info */}
          <div className='pt-5 mx-auto'>
            <span>
              From: <b>{form.pickup}</b>
            </span>
            <br />
            <span>
              To: <b>{form.destination}</b>
            </span>
            <br />
            <span>
              Distance: <b>9.9</b> km
            </span>
            <br />
            {/* <span>Invalid location</span><br /> */}
          </div>
        </div>

        {/* map */}
        <div className='col-lg-8'>
          <img src={StaticImg} className='img-fluid' />
        </div>
      </Section>
    </>
  )
}

export default Search
