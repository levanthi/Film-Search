import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styles from './main.module.scss'
import  Logo from '../../static/image/Logo.svg'
function Navbar({search,setSearch})
{
    return (
        <div className={clsx(styles.navbar)}>
            <Link to='Film-Search/'>
                <img src={Logo} className={clsx(styles.logo)} alt='logo'/>
            </Link>
            <input 
                value={search} 
                placeholder='Tìm kiếm'
                onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
    )
}

export default Navbar
