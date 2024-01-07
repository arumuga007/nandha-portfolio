import styles from './../styles/navbar.module.css';
const NavigationBar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
            Logo
            </div>
            <div className={styles['menu-bar']}>
                <div className={styles['home']}>
                    Home
                </div>
                <div className={styles.skills}>
                    skills
                </div>
                <div className={styles.project}>
                    Projects
                </div>
            </div>
            <div className={styles['social-icons']}>
                <div>

                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>
            <div className={styles['lets-connect']}>
                Let's Connect
            </div>
        </div>
    );
}
export default NavigationBar;