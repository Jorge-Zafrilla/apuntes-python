import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import apunteslogo from '@site/static/img/logo-apuntes.png';
import actividadeslogo from '@site/static/img/logo-actividades.png';
import anuncioslogo from '@site/static/img/logo-anuncios.png';

const FeatureList = [
  {
    title: 'Conceptos clave',
    Img: apunteslogo,
    description: (
      <>
        Explicaciones claras y ordenadas de los fundamentos de Python: variables, estructuras de control, funciones, clases, manejo de errores y más..
      </>
    ),
  },
  {
    title: 'Casos de uso',
    Img: actividadeslogo,
    description: (
      <>
        Ejemplos prácticos y pequeños programas que te ayudan a ver cómo aplicar los conceptos en situaciones reales.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img src={Img} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}