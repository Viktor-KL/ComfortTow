import styles from './header.module.css';
import Image from 'next/legacy/image';
import RoomImg from './../../public/img/Header/img-2.png';
import AvatarImg from './../../public/img/Header/img-3.svg';
import BedIcon from './../../public/img/icons/Bed.svg';

const Header = () => {
    return (
        <header className={`container ${styles.wrap}`}>
            <div className={styles.infoBlock}>
                <h1 className={styles.title}>Still havent found your <span className='c-purple'>home?</span> Easy to contact us!</h1>
                <p className={`subtitles fz-24 ${styles.subtitle}`}>Estately is here to find a house in the region you want, at the price you want, in the style you want!</p>
                <a href="#purple" className="btn btn-purple fz-22">Contact us</a>
            </div>
            <div className={styles.offerBlock}>
                <div className={`d-flex ${styles.offerBlock__head}`}>
                    <Image 
                    src={RoomImg}
                    alt='RoomImg'
                    className={styles.roomImg}
                    placeholder="blur"
                    blurDataURL={RoomImg}
                    />
                    <div className={styles.offerBlock__info}>
                        <h3 className={styles.offerBlock__title}>
                            Ivano-Frankivsk
                        </h3>
                        <p className={styles.offerBlock__address}>10 Tselevicha Yu. str</p>
                        <div className={`d-flex ai-c ${styles.offerBlock__roomWrap}`}>
                            <Image 
                            src={BedIcon}
                            alt="BedIcon"
                            className={styles.offerBlock__bedIcon}
                            placeholder="blur"
                            blurDataURL={AvatarImg}
                            />
                            <p className={styles.offerBlock__room}> two room</p>
                        </div>
                        
                    </div>
                </div>
                <div className={`d-flex ai-c jc-sb ${styles.offerBlock__avatarWrap}`}>
                    <div className="d-flex ai-c">
                        <Image 
                        src={AvatarImg}
                        alt='avatar'
                        className={styles.offerBlock__avatar}
                        placeholder="blur"
                        blurDataURL={AvatarImg}
                        />
                        <p className={styles.offerBlock__name}>
                            Vasyl Lukach
                        </p>
                    </div>
                    <div className="d-flex fd-row">
                        <p className={styles.offerBlock__price}>500$/month</p> 
                    </div>
                </div>
                <p className={`subtitles fz-14 ${styles.offerBlock__subtitle}`}>
                    The house is a 2-room apartment. The layout of the rooms is separate. The general condition of the apartment is European renovation. Bargaining is appropriate
                </p>
                <a href="#realty" className={`btn btn-transparent ${styles.offerBlock__btn}`}>See details</a>
            </div>
        </header>
    )
}

export default Header;