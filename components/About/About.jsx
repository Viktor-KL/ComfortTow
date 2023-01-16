import styles from './about.module.css';

const About = () => {
    return (
        <section className={`container ${styles.wrap}`}>
            <div className={styles.imgBlock}></div>
            <div className={styles.infoBlock}>
                <h2 className="title">
                    Get to Know Us More
                </h2>
                <p className="subtitles fz-24">We help you in finding your dream home. We can help you through the office and website. Our offices are spread all over the world. you can easily access and choose according to your wishes.</p>
                <div className={styles.infoBlock__statistics}>
                    <div className={styles.statistics__part}>
                        <p className={styles.statistics__title}>
                            200+
                        </p>
                        <p className={styles.statistics__subtitle}>
                            Happy clients
                        </p>
                    </div>
                    <div className='vertical-line'></div>
                    <div className={styles.statistics__part}>
                        <p className={styles.statistics__title}>
                            180+
                        </p>
                        <p className={styles.statistics__subtitle}>
                            Happy clients
                        </p>
                    </div>
                    <div className='vertical-line'></div>
                    <div className={styles.statistics__part}>
                        <p className={styles.statistics__title}>
                            200+
                        </p>
                        <p className={styles.statistics__subtitle}>
                            Happy clients
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;