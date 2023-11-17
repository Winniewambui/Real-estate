import React from 'react';
import './CompaniesStyle.css';
import prologis from '../../assets/prologis.png';
import equinix from '../../assets/equinix (1).png';
import realty from '../../assets/realty.png';
import tower from '../../assets/tower.png';


const Companies = () => {
  return (
    <section className='company-wrapper'>
      <div className='companies-container'>
        <img src={prologis} alt=''/>
        <img src={equinix} alt=''/>
        <img src={realty} alt=''/>
        <img src={tower} alt=''/>
      </div>
    </section>
  );
}

export default Companies;
