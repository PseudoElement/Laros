
import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { Radio } from 'components/Radio'
import { Slider } from 'features'
import { ContactForm } from 'features/ContactForm'
import { CategoryCard } from 'pages/TravelPlannerPage/CategoryCard'
import { FC, useState } from 'react'
import {Checkbox} from "../../components/Checkbox";
import { moreCategoriesMock } from 'shared/mocks/tripPlanner'
import { Tags } from 'features/Tags'
import { mockTags } from 'shared/mocks/tags'


export const HomePage: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [input, setInput] = useState<any>('')
  const [checkboxValue, setCheckboxValue] = useState('man')



  const [tags, setTags] = useState(mockTags)
  //TODO move to example page
  return <div style={{ marginTop: '15px', backgroundColor: '#FAFBFC', width: '100%' }}>
    <div className='row'>
        <Input
          label='Earliest depature'
          type='date'
          id='100'
          onChange={e => console.log('get date')}
        />
      </div>

      <div style={{ marginTop: '15px' }} onClick={() => setIsModalOpen(true)} ></div>




      <div>
        <Slider withNavigation withPagination slidesPerView={3.5}>
          {moreCategoriesMock.map((card, id) => {
            return (
              <CategoryCard {...card} key={id} vertical />
            )
          })}
        </Slider>
      </div>
      <Slider slidesPerView={2} withPagination>
        {moreCategoriesMock.map((card, id) => {
          return (
            <CategoryCard {...card} key={id} />
          )
        })}
      </Slider>


      //TODO move to example page
    <ContactForm />
    <Radio onChange={(v) => setCheckboxValue(v)} name='sex' options={[{ label: 'Man', value: 'man' }, { label: 'Woman', value: 'woman' }, { label: 'No', value: 'no' }]} value={checkboxValue} />
    <Input id='num' value='' type='phone' label='Number' onChange={(v) => setInput(v)} />
    <Input placeholder='Mark' id='name' value={input} label='Fullname and surname' onChange={(v) => setInput(v)} />
    <Modal title='Contact Form' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>Hello!</Modal>
    <Checkbox label={"Текст Чекбокса"}/>
  <Tags tags={tags} onChange={setTags} />
    </div>
}
