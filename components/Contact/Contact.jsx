import styles from './contact.module.css';

const Contact = () => {
    return (
        <section className={styles.wrap}>
            <div className="container">
                <div className="d-flex">
                    <div className={styles.infoBlock}>
                        <h2 className={styles.title}>Contact your personal manager </h2>
                        <p className={styles.subtitles}>if you have any questions or difficulties with renting an apartment, then leave your details and our manager will contact you in the near future.</p>
                    </div>
                    <div className="formBlock">
                        <div className={`d-flex ${styles.formBlockInputs}`}>
                            <input className={styles.input} type="text" placeholder='Name' />
                            <input className={styles.input} type="text" placeholder='Phone' />
                        </div>
                        <input type="submit" className={styles.submit} value='Send'/>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Contact; 