import React, { useEffect } from 'react';
// Hook
import { useDispatch ,useSelector } from 'react-redux';
import { updateCurrentCategory } from '../../Storage/Reducers/MoviesByCategories.js';
// Styles
import { ContentFilterCategories, Category } from './FilterCategoriesStyles.js';

const FilterCategories = () => {

  const categoryId = localStorage.getItem('currentCategory');
  const { list, isLoading, error } = useSelector(state => state.listCategories);
  const dispatch = useDispatch();

  useEffect( () => {
    // Add class to category 
    const categorySelect = document.querySelector(`#category-${categoryId}`)
    categorySelect?.classList.add('categoryActive');
  }, [list] )

  const handleCategory = (e, id) => {
    const item = e.target
    const listItems = document.querySelector('.listCategories').childNodes;
    dispatch( updateCurrentCategory(id) )
    
    // Remove class from list categories
    listItems.forEach( (category) => {
      category.classList.remove('categoryActive');
    })

    // Add class to selected Category
    item.classList.add('categoryActive');
  }

  return (

    <ContentFilterCategories className='listCategories' >

        {
          isLoading
            ? (<div></div>)
            : list.map(category => (
                <Category 
                  key={category.id}
                  id={`category-${category.id}`}
                  onClick={ (e) => handleCategory(e, category.id)}
                > 
                  {category.name}
                </Category>
            ))
        }
    </ContentFilterCategories>
  )
};

export default FilterCategories;
