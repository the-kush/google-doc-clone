import React from 'react';
import docImage from '../../images/docImage.png';
import star from '../../images/star.png';
import comment from '../../images/comment.png';
import join from '../../images/join.png';
import account from '../../images/account.png';
import './header.css';


const Header = () => {
  return (
    <div className='doc__header'>
        <div className='doc__header-links'>
            <div className='doc__header-links_logo'>
              <img src={docImage} alt='doc'/>
            </div>
            <div className='doc__header-links_container'>
              <div className='doc__header-links_firstRow'>
                <h2>Untitled Document</h2>
                <img src={star} alt='star'/>
              </div>
              <div className='doc__header-links_container-tools'>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Insert</p>
                <p>Format</p>
                <p>Tools</p>
                <p>Extensions</p>
                <p>Help</p>
              </div>
            </div>
            <div className='doc__header-links_container-comment'>
              <img  src={comment} alt='comment'/>
            </div>
            <div className='doc__header-links_container-join'>
              <img src={join} alt='join'/>
            </div>
            <div className='doc__header-links_button'>
              <button type='button'>Share</button>
            </div>
            <div className='doc__header-links_container-account'>
              <img src={account} alt='account'/>
            </div>
        </div>
    </div>
  )
}

export default Header
