import Image from 'next/legacy/image';
import styles from './why.module.css';
import PriceImg from './../../public/img/why/img-1.svg';
import LocationImg from './../../public/img/why/img-2.svg';
import ReliabilityImg from './../../public/img/why/img-3.svg';

const Why = () => {
    const benefits = [
        {
            src: PriceImg,
            alt: 'DollarIcon',
            data: PriceImg,
            title: 'Price',
            subtitle: 'We have the lowest prices, so you will have no problem finding accommodation'
        },
        {
            src: LocationImg,
            alt: 'HomeIcon',
            data: LocationImg,
            title: 'Location',
            subtitle: 'We have the lowest prices, so you will have no problem finding accommodation'
        },
        {
            src: ReliabilityImg,
            alt: 'RealiabilityImg',
            data: ReliabilityImg,
            title: 'Reliability',
            subtitle: 'We have the lowest prices, so you will have no problem finding accommodation'
        }
    ]

    return (
        <div className={`container ${styles.wrap}`}>
            <h2 className="title">Why us?</h2>
            <div className={styles.blockWrap}>
                {benefits.map((item, key) => (
                    <div key={key} className={styles.block}>
                        <Image 
                        src={item.src}
                        alt={item.alt}
                        className={styles.blockIcon}
                        placeholder="blur"
                        blurDataURL={item.data}
                        />
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className='subtitles fz-18'>{item.subtitle}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Why;