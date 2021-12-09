import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useRef,useState} from 'react'
import styles from './main.module.scss'
import Trailer from '../Trailer'
import {ReactComponent as Star} from '../../static/image/star-solid.svg'
import {ReactComponent as Play} from '../../static/image/play-solid.svg'
import {ReactComponent as Youtube} from '../../static/image/youtube-brands.svg'

function Body({filter})
{

    const [trailer,setTrailer] = useState()
    const overlayRef = useRef()
    return(
        <div className={clsx(styles.body)}>
            {console.log('Home-render')}
            {trailer?<Trailer item={trailer} />:""}
            <h2>Danh Sách Phim</h2>
            <div className='grid'>
                <div className={clsx('row',styles.row1)}>
                    <div 
                        ref={overlayRef} 
                        className='overlay' 
                        onClick={(e)=>{
                            e.target.style.display='none'
                            setTrailer('')
                        }
                    }></div>
                    {filter.map((item)=>{
                        return(
                            <div key={item.id} className={clsx('col l-2-4',styles.item)}>
                                <Link to={`store/films/${item.id}`}>
                                    <span className={clsx(styles.play)}>
                                        <Play/>
                                    </span>
                                    {item.trailer?
                                        <>
                                        <span onClick={(e)=>{
                                            e.preventDefault()
                                            overlayRef.current.style.display='block'
                                            setTrailer(item)
                                        }} className={clsx(styles.youtube)}><Youtube/></span>
                                        </>:''
                                    }
                                    <div className={clsx(styles.content)}>
                                        <img alt='' src={item.thum_nail} />
                                        <span className={clsx(styles.sub)}>{item.sub}</span>
                                        <div className={clsx(styles.info)}>
                                            <div>
                                                <span className={clsx(styles.type)}>{item.type}</span>
                                                <span className={clsx(styles.star)}>
                                                    {item.star?
                                                    <>
                                                        <Star/>
                                                        <span>{item.star}/10</span>
                                                    </>:''}
                                                </span>
                                            </div>
                                            <div className={clsx(styles.name)}>{item.name}</div>
                                            <span className={clsx(styles.view)}>{item.view/1000}K xem</span>
                                            <span className={clsx(styles.time)}>{item.time}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Body
