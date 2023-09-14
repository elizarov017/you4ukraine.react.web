import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import './CategoriesList.scss'
import { TailSpin } from  'react-loader-spinner'
import ApplicationConstants from '../../ApplicationConstants';

export default function CategoriesList({categories}) {
  return (
    <div className='categories-list'>
        {
          categories ?
            categories.map(category =>
                <CategoryCard key={category.categoryId} category={category}></CategoryCard>
            )
          :
            <div className="loader-wrap">
              <TailSpin color={ApplicationConstants.COLORS.PRIMARY} height={100} width={100} />
            </div>
        }
    </div>
  )
}
