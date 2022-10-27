import { Tab, TabList, Tabs } from 'react-tabs'

import { Select } from 'components/Select'

import s from './Sorting.module.scss'

const categories = [{ icon: '', label: 'Category 1', value: 'categoty-1' }]
const regions = [
  { icon: '', label: 'Sub-region name', value: 'sub-region-name' },
]
const AccommodationTypes = [
  { icon: '', label: 'Accommodation type', value: 'accommodation-type' },
]
const Direction = [
  { icon: '', label: 'A-Z', value: 'asc' },
  { icon: '', label: 'Z-A', value: 'desc' },
]

const Sorting = () => {
  return (
    <>
      <div className={s.selects}>
        <Select classname={s.select} isMulti options={regions} />
        <Select classname={s.select} options={categories} />
      </div>
      <div className={s.services}>
        <Select options={AccommodationTypes} />
        <div className={s.price}>
          <p>Price Range</p>
          <input type='range' />
        </div>
      </div>
      <div className={s.sorting}>
        <div className={s.tags}>
          Tags:
          <Tabs selectedTabClassName={s.selectedTab} defaultIndex={0}>
            <TabList className={s.tabs}>
              <Tab className={s.tab}>Beach view</Tab>
              <Tab className={s.tab}>Breakfast included</Tab>
              <Tab className={s.tab}>Vitae at</Tab>
              <Tab className={s.tab}>Vivamus consectetur</Tab>
            </TabList>
          </Tabs>
        </div>
        <div className={s.direction}>
          From
          <Select classname={s.selectDirection} options={Direction} />
        </div>
      </div>
    </>
  )
}

export default Sorting
