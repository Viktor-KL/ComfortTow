import styles from './nav.module.css';
import Link from 'next/link';

const Nav = () => {
    const Links = [
        {
            title: 'Home',
            href: ''
        },
        {
            title: 'About us',
            href: '#about'
        },
        {
            title: 'Rent',
            href: '#rent'
        },
        {
            title: 'Why us',
            href: '#why'
        },
        {
            title: 'Our Reviews',
            href: '#reviews'
        },
        {
            title: 'FAQ',
            href: '#faq'
        }
    ] 
    return (
        <nav className={`container ${styles.wrap}`}>
            <Link href='/' className={styles.logo}><span className='c-purple'>Comfort</span>Town</Link>
            <div className={styles.linksWrap}>
                {Links.map((item, key) => (
                    <a key={key} className={styles.links} href={item.href}>{item.title}</a>
                ))}
                <a href="#contact" className='btn btn-transparent fz-18'>Contact us</a>
            </div>
        </nav> 
    )
}
    
export default Nav;