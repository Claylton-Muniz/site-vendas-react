import styles from './Login.module.css'

import login from '../../assets/svg/login.svg'

export const Login = () => {
  return (
    <>
      <div className={styles.area}>
        <div className={styles.left_area}>
          <img src={login} className={styles.left_image} alt="imagem_login" />
        </div>

        <div className={styles.right_area}>
          <div className={styles.card_login}>
            <h1>Login</h1>
            <form>
              <div className={styles.textfield}>
                <label>
                  <span>Email</span>
                  <input type="text" name='email' placeholder='Email' />
                </label>
                <label>
                  <span>Senha</span>
                  <input type="password" name='senha' placeholder='Senha' />
                </label>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}
