import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/fabriciocunhauk.png" alt="Fabricio Cunha" />
            <div>
                <strong>Fabricio Cunha</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}