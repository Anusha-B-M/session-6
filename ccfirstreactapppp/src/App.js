import React from 'react';
import './App.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ItemsTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.items);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Items</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('veg')}
              className={getClassNamesFor('veg')}
            >
              Veg
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('nonveg')}
              className={getClassNamesFor('nonveg')}
            >
              Nonveg
            </button>
          </th>
          
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.veg}</td>
            <td>${item.nonveg}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ItemsTable
        items={[
          { id: 1, veg: 'Dal', nonveg: 'Fish'},
          { id: 2, veg: 'Rice', nonveg: 'Meat' },
          
        ]}
      />
    </div>
  );
}

