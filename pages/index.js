import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Button = styled.button`
    background-color:blue;
    color:white;
    border:2px solid black;

`

export default function Home() {
  return (
    <div className={styles.container}>

        <Button>Submit</Button>


      <h1>Welcome Next.JS</h1>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quos corrupti facere autem nulla amet reiciendis temporibus exercitationem sit suscipit fuga perferendis quis placeat. Velit expedita quasi officiis adipisci asperiores!
    </div>
  )
}
