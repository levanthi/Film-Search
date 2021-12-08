import clsx from 'clsx'
import { useLocation } from 'react-router'
import styles from './main.module.scss'

function Watch({films})
{
    let location = useLocation()
    ;(()=>{
        location = [...location.pathname]
        location = location.slice(location.lastIndexOf('/')+1)
        location = location.join('')
    })()
    let film
    ;(()=>{
        films.some(item => {
            if(item.id===location)
            {
                film=item
                return true
            }
            return false
        })
    })()
    
    return(
        <div className={clsx(styles.watch)}>
            {film?
                <div className={clsx(styles.videoWrap)}>
                    <video autoPlay={true} controls src={film.video}></video>
                    <h5>{film.name}</h5>
                </div>
                :''
            }
        </div>
    )
}

export default Watch
