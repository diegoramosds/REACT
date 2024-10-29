import styles from "./CarsDetails.module.css"

const CarsDetails = ({ brand,color, km }) => {
  return (
    <div>
        <h1 className={styles.my_title}> CARS </h1>
        <p>Marca:{brand}</p>
        <p>Cor:{color}</p>
        <p>Km: {km}</p>
    </div>
  )
}

export default CarsDetails