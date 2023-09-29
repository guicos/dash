import React from 'react';
import styles from './Table.module.css';

export default function ProductTable({ title, result }){
  return (
      <div style={{ maxWidth: '100%', overflowY: 'scroll', height: '80vh'}}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            {title}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {result}
        </tbody>
      </table> 
        </div>
  );
}; 