import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name='keywords' content='ninja'></meta>
      </Head>
      <div>
        <h1 className={styles.title}> Home Page </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra
          facilisis lorem, nec rhoncus nulla venenatis rhoncus. Etiam urna
          libero, varius non orci in, cursus vehicula nulla. Aliquam at odio
          massa. Donec tristique fermentum nibh. Cras vel risus diam.
          Suspendisse tincidunt volutpat lorem, id consequat diam scelerisque
          nec. Nunc pretium eros eu justo gravida dapibus. Curabitur lobortis
          lacus in dapibus porttitor. Cras tempus at ipsum sit amet tincidunt.
          Maecenas gravida dignissim sollicitudin. Vivamus placerat, mauris quis
          luctus scelerisque, libero leo eleifend diam, id ornare urna nunc nec
          diam. Curabitur vestibulum et mauris ut euismod. Vivamus et cursus
          neque. Nam fringilla tortor vel eros aliquam, sed consectetur libero
          iaculis. Donec lobortis in nisl sed auctor. Phasellus vitae mauris vel
          ipsum sagittis ultrices. Curabitur id lobortis odio. Nullam nec odio
          at eros pellentesque vehicula eu ut mauris.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
