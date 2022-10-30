import React, { FC, useState } from 'react'
import { HotelCard } from 'features/HotelCard'
import { Input } from 'components/Input'
import { Slider } from 'features'
import { CategoryCard } from 'pages/TravelPlannerPage/CategoryCard'
import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import { ContactForm } from 'features/ContactForm'
import { Radio } from 'components/Radio'
import { Map, Modal } from 'components'
import { Checkbox } from 'components/Checkbox'
import { Tags } from 'components/Tags'
import { mockTags } from 'shared/mocks/tags'
import { ChangeLocationModal } from 'features/ChangeLocationModal'
import { destinationsMock } from 'shared/mocks/destinations'
import { TripCard } from 'pages/TravelPlannerPage/TripCard'
import { tripCards } from 'shared/mocks/tripCards'
import { ChangeTransferModal } from 'features/ChangeTransferModal'
import { carsMock } from 'shared/mocks/cars'
import { TransferType } from 'shared/types/car'
import axios from 'axios'

import s from './example.module.scss'

export const ExamplePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChangeCarOpen, setIsChangeCarOpen] = useState(false)
  const [input, setInput] = useState<any>()
  const [checkboxValue, setCheckboxValue] = useState('man')
  const [counter, setCounter] = useState<any | Date>('')
  const [counter1, setCounter1] = useState<any | Date>('')
  const [tags, setTags] = useState(mockTags)
  const tripCardData = tripCards[0]

  const [route, setRoute] = useState()

  React.useEffect(() => {
    async function getRoute() {
      await axios({
        method: 'GET',
        url: 'http://165.227.155.246/api/trip/1',
      }).then(data => setRoute(data.data.data.route))
    }
    getRoute()
  }, [])


  const [e, setE] = useState('ssssssssss')

  const ee = (ee: string) => {
    setE(ee)
  }
  return (
    <div
      style={{
        marginTop: '45px',
        margin: '45px',
        width: '100%',
        backgroundColor: '#FAFBFC',
      }}
    >
      <div style={{ width: '1200px', margin: 'auto' }}>
        <Slider
          withNavigation
          nextEl='moreNext'
          prevEl='morePrev'
          classname={s.sliderCustom}
        >
          {moreCategoriesMock.map((card, id) => {
            return <CategoryCard {...card} key={id} vertical />
          })}
        </Slider>
      </div>

        <div style={{height: '800px', width: '1500px'}}>
          <Map route={route} />
        </div>
      <div
        style={{ marginTop: '15px', backgroundColor: '#FAFBFC', width: '100%' }}
      >
        <div style={{ width: '400px', marginLeft: 50 }}>
          {/* <InputCalendar label='Earliest depature' /> */}
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Counter'
            type='number'
            id='100'
            onChange={value => setCounter(value)}
            value={counter}
            withCounter
            max={5}
            min={1}
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Name&nbsp;&&nbsp;Surname:'
            placeholder='Enter your Name'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Email:'
            placeholder='Email'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='email'
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Phone&nbsp;number:'
            placeholder='Enter Phone'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='phone'
          />
        </div>
        <div style={{ width: '400px', marginTop: 100, marginLeft: 50 }}>
          {/* <InputCalendar label='Earliest depature' shorten /> */}
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Counter'
            type='number'
            id='100'
            onChange={value => setCounter(value)}
            value={counter}
            withCounter
            max={5}
            min={1}
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Name&nbsp;&&nbsp;Surname:'
            placeholder='Enter your Name'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            shorten
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Email:'
            placeholder='Email'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='email'
            shorten
          />
        </div>
        <div style={{ width: '400px', marginLeft: 50 }}>
          <Input
            label='Phone&nbsp;number:'
            placeholder='Enter Phone'
            onChange={value => setCounter1(value)}
            id='1'
            value={counter1}
            type='phone'
            shorten
          />
        </div>
        <div
          style={{ marginTop: '15px' }}
          onClick={() => setIsModalOpen(true)}
        ></div>

        <Slider>
          {moreCategoriesMock.map((card, id) => {
            return <CategoryCard {...card} key={id} />
          })}
        </Slider> */}
        //TODO move to example page
        <ContactForm />
        <Radio
          onChange={v => setCheckboxValue(v)}
          name='sex'
          options={[
            { label: 'Man', value: 'man' },
            { label: 'Woman', value: 'woman' },
            { label: 'No', value: 'no' },
          ]}
          value={checkboxValue}
        />
        <Input
          id='num'
          value=''
          type='phone'
          label='Number'
          onChange={v => setInput(v)}
        />
        <Input
          placeholder='Mark'
          id='name'
          value={input}
          label='Fullname and surname'
          onChange={v => setInput(v)}
        />
        <Modal
          title='Contact Form'
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          Hello!
        </Modal>
        <Checkbox label={'Текст Чекбокса'} />
        <Tags tags={tags} onChange={setTags} />
        <ChangeLocationModal
          destinations={destinationsMock}
          onClick={() => 1}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>

      <HotelCard tags={tags} />
      <ChangeTransferModal
        cars={carsMock}
        type={TransferType.PICKUP}
        onClick={() => 1}
        isOpen={isChangeCarOpen}
        onClose={() => setIsChangeCarOpen(false)}
      />
      <div
        style={{
          width: '1152px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <TripCard {...tripCardData} wide />
      </div>
    </div>
  )
}
