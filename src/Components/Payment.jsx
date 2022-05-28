import React from 'react'
import styles from './Payment.module.css'

function Payment({data}) {
  console.log('prop',data);
  return (
    <>
      {data.map((dat)=>(
        <div className={dat.heading==="Amazon Gift Pay" ?styles.container:styles.container2}>
        <h3>{dat.date}</h3>
        <img src={dat.logo} alt="" />
        <p>{dat.case}</p>
        <h1>{dat.heading}</h1>
        <div className={styles.abc}><h3 >{dat.subheading}</h3>
        <span className={styles.arrow}>{dat.arrow}</span></div>
        
        </div>
      ))}
    
    </>
        
        
   
  )
  
}

export default Payment