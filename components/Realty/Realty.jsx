import styles from './realty.module.css';
import data from './../../data/offers';
import { useState } from 'react';

const Realty = () => {
    const [filter, setFilter] = useState('all');

    const buttons = [
        {
            text: 'home',
            filterValue: 'home'
        },{
            text: 'appartaments',
            filterValue: 'appartaments'
        },{
            text: 'commercial and ....',
            filterValue: 'commercial'
        },{
            text: 'all',
            filterValue: 'all'
        }
    ]

    const appartments = filter === 'all' ? data : data.filter(item => item.type === filter)
    console.log(data);
    return (
        <div className={`container ${styles.wrap}`}>

            {buttons.map(item => (
                <button onClick={() => setFilter(item.filterValue)} className={`${filter === item.filterValue ? 'active' : ''}`}>{item.text}</button>
            ))}

            {appartments.map((item, key) => (
                <div key={key} className="block">
                    <img src={`/img/houses/${item.image}`} alt='house' />
                    <h3 className={styles.title}>{item.city}</h3>
                    <p className={styles.price}>{item.price}</p>
                    <p className={styles.address}>{item.address}</p>
                    <a href="">See details</a>
                </div>
            ))}

        </div>   
    )
}

export default Realty;