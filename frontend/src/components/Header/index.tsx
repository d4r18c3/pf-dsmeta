import logo from '../../assets/img/dsmeta-logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={logo} alt="Sistema Financeiro - logotipo" />
                    <h1>Sistema Financeiro: módulo cashback</h1>
                    <p>Sejam bem-vindos! Desenvolvido por <a href="https://github.com/mezengasoftware" target="_blank">@mezengasoftware</a></p>
                </div>
            </header>
        </>
    )
}

export default Header