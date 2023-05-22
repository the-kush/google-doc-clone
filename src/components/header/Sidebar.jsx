import React from 'react';
import './sidebar.css';
import calender from '../../images/calender.png';
import keep from '../../images/keepnote.png';
import map from '../../images/maps.png';
import plus from '../../images/plus.png';

const Sidebar = () => {
  return (
    <div className='google__sidebar'>
      <li><img src={ calender} alt='calender'/></li>
      <li><img src={ keep } alt='keepnote'/></li>
      <li><img src={ map } alt='map'/></li>
      <li>____</li>
      <li><img src={ plus } alt='plus'/></li>
    </div>
  )
}

export default Sidebar

