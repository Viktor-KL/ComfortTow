import { useState } from 'react';
import styles from './faq.module.css';
import { Collapse, Text } from "@nextui-org/react";

const Faq = () => {
    const [style, setStyle] = useState('c-purple')
    const accordian = [
        {
            title: <h3 className={styles.accordianTitle}>Get to Know Us More?</h3>,
            subtitle: 'No. But with the vast majority. And we are constantly working on expanding the portfolio of offers.'
        },
        {
            title: <h3 className={styles.accordianTitle}>Do you work with all business centers in Kyiv?</h3>,
            subtitle: 'No. But with the vast majority. And we are constantly working on expanding the portfolio of offers.'
        },
        {
            title: <h3 className={styles.accordianTitle}>In this case, you do not have complete information about the offer market?</h3>,
            subtitle: 'No. But with the vast majority. And we are constantly working on expanding the portfolio of offers.'
        },
        {
            title: <h3 className={styles.accordianTitle}>Do you charge a commission? Or is the cost of your services already included in the rental price?</h3>,
            subtitle: 'No. But with the vast majority. And we are constantly working on expanding the portfolio of offers.'
        },
        {
            title: <h3 className={styles.accordianTitle}>Do you work with all business centers in Kyiv?</h3>,
            subtitle: 'No. But with the vast majority. And we are constantly working on expanding the portfolio of offers.'
        }
    ]
    const activeCollapse = () => {
        setStyle('c-purple');
    }
    return (
        <div className={`container d-flex ${styles.wrap}`}>
            <div className="infoBlock">
                <h2 className="title">
                    <span className="c-purple">Popular questions</span> 
                </h2>
                <p className="subtitles fz-24">Got any questions, queries or concerns? Here's what people often ask us.. What i Incredi</p>
            </div>
            <Collapse.Group>
                {accordian.map((item, key) => (
                    <Collapse className={styles.collapse} key={key} title={item.title}>
                        <Text className={styles.accordianSubtitle}>
                            {item.subtitle}
                        </Text>
                    </Collapse>
                ))}
            </Collapse.Group>
        </div>
    )
}

export default Faq;