import clsx from 'clsx'
import styles from './main.module.scss'

function Trailer({item})
{
    return(
        <div className={clsx(styles.trailer)}>
            {console.log('trailer-render')}
            <iframe title={item.id} src={item.trailer}></iframe>
            <div className={clsx(styles.infoWrap)}>
                <div>{item.name}</div>
                <div>{item.view} lượt xem</div>
                <div>đánh giá: {item.star}/10</div>
                <div>Loại {item.type}</div>
                <div>Thời lượng: {item.time}</div>
            </div>
        </div>
    )
}

export default Trailer
