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

export const ExamplePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChangeCarOpen, setIsChangeCarOpen] = useState(false)
  const [input, setInput] = useState<any>('')
  const [checkboxValue, setCheckboxValue] = useState('man')
  const [counter, setCounter] = useState(3)
  const [tags, setTags] = useState(mockTags)
  const tripCardData = tripCards[0]
  return (
    <div
      style={{
        marginTop: '15px',
        width: '100%',
        backgroundColor: '#FAFBFC',
      }}
    >
      <Map />
      <div
        style={{ marginTop: '15px', backgroundColor: '#FAFBFC', width: '100%' }}
      >
        <div className='row'>
          <Input
            label='Earliest depature'
            type='date'
            id='100'
            onChange={e => console.log('get date')}
          />
        </div>
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
        <div
          style={{ marginTop: '15px' }}
          onClick={() => setIsModalOpen(true)}
        ></div>
        <div>
          <Slider>
            {moreCategoriesMock.map((card, id) => {
              return <CategoryCard {...card} key={id} vertical />
            })}
          </Slider>
        </div>
        <Slider>
          {moreCategoriesMock.map((card, id) => {
            return <CategoryCard {...card} key={id} />
          })}
        </Slider>
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
      <ChangeTransferModal cars={carsMock} type={TransferType.PICKUP} onClick={() => 1} isOpen={isChangeCarOpen} onClose={() => setIsChangeCarOpen(false)} />
      <div
        style={{
          width: '1152px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <TripCard
          {...tripCardData}
          wide
        />
      </div>
    </div>
  )
}
