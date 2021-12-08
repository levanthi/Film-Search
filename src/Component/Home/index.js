import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styles from './main.module.scss'
import {ReactComponent as Star} from '../../static/image/star-solid.svg'
import {ReactComponent as Play} from '../../static/image/play-solid.svg'

function Body({filter})
{
    return(
        <div className={clsx(styles.body)}>
            <h2>Danh Sách Phim</h2>
            <div className='grid'>
                <div className={clsx('row',styles.row1)}>

                    {filter.map((item)=>{
                        return(
                            <div key={item.id} className={clsx('col l-2-4',styles.item)}>
                                <Link to={`Film-Search/store/films/${item.id}`}>
                                    <span className={clsx(styles.play)}>
                                        <Play/>
                                    </span>
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
