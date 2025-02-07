import styles from './FireTable.module.scss';

const FireTable = ({ headers, rows }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.scrollIndicator}>
        ← Прокрутите таблицу горизонтально для просмотра всех данных →
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className={styles.tableHeader}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className={styles.rowName}>{row.name}</td>
                {row.values.map((value, cellIndex) => (
                  <td key={cellIndex} className={styles.tableCell}>
                    {value !== null ? value : '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FireTable;
