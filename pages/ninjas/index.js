import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: { ninjas: data },
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | All Ninjas </title>
        <meta name='keywords' content='ninja'></meta>
      </Head>
      <div>
        <h1>All Ninjas</h1>

        {ninjas.map(ninja => (
          <div key={ninja.id}>
            <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
              <a className={styles.single}>
                <h3>{ninja.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default Ninjas
