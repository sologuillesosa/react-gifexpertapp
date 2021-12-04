import React, { useState } from 'react'; // rsc (React Stateless Component - Reactjs code snippets)
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);
  // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr />

      <ol>
        {
          categories.map( category => (
            <GifGrid 
              key={ category } 
              category={ category } 
            />
          ))
        }
      </ol>
    </>
  );
};
