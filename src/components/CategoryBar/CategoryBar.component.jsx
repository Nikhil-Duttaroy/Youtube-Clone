import React, { useState } from "react";
import "./CategoryBar.styles.scss"

const category = [
   'All',
   'HTML',
   'CSS',
   'Javascript',
   'React js',
   'Node js',
   'Python',
   'Django',
   'Flask',
   'Cars',
   'Bikes',
   'Coding',
   'Programming',
   'India',
   'Blogs',
   'Pillai College',
   'Nikhil',
]

const CategoryBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return ( 
    <div className='category_bar'>
      {category.map((value, idx) => (
        <span
          key={idx}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoryBar
