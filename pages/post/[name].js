import React from 'react'
import {useRouter} from 'next/router'
import styles from './post.module.scss'
const Postname = () => {

    const router = useRouter()

    return (
        <div>
            <h1 className={styles.heading}>First Post : { router.query.name }</h1> 
        </div>
    )
}

export default Postname
