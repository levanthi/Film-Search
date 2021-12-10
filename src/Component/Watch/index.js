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
            {console.log('watch-render')}
            {film?
                <div className={clsx(styles.videoWrap)}>
                    <video muted autoPlay controls >
                        <source src={film.video} type="video/mp4"/>
                    </video>
                    <h5>{film.name}</h5>
                    <h4>Thông tin chi tiết</h4>
                    <h6>Đánh giá: {film.star}</h6>
                    <h6>Lượt xem: {film.view}</h6>
                    <h6>Thời lượng: {film.time}</h6>
                    <h6>Loại: {film.type}</h6>
                </div>
                :''
            }
        </div>
    )
}

export default Watch
