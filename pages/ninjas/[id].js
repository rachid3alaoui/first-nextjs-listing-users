import React from 'react'
import Head from 'next/head'

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  const data = await response.json()

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  const ninja = await response.json()

  return {
    props: {
      ninja,
    },
  }
}

const NinjaDetails = ({ ninja }) => {
  return (
    <div>
      <Head>
        <title>Ninja List </title>
        <meta name='keywords' content='ninja'></meta>
      </Head>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  )
}

export default NinjaDetails
