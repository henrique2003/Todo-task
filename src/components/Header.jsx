import logo from '../assets/logo.svg'

import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <img
        src={logo}
        alt="Logotigo com um foguete na parte esquerda da imagem e um texto escrito todo"
      />
    </div>
  )
}

export default Header