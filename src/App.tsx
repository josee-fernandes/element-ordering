import React from 'react'

import './reset.css'

interface IItem {
  color: string
  position: number
}

export default function App() {
  const [items] = React.useState<IItem[]>([
    {
      color: '#c55151',
      position: 3
    },
    {
      color: '#5159c5',
      position: 1
    },
    {
      color: '#dfad63',
      position: 2
    }
  ])

  const [orderedItems, setOrderedItems] = React.useState<IItem[]>()

  React.useEffect(() => {
    const itemsCopy = items.slice()

    setOrderedItems(
      itemsCopy.sort((a, b) => a.position - b.position)
    )
  }, [items])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '2rem',
        fontFamily: 'sans-serif',
        height: '100vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <h1>Sem ordenar</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {items?.map(item =>
            <div
              style={{
                width: 100, 
                height: 100,
                backgroundColor: item.color,
                display: 'grid',
                placeItems: 'center',
                borderRadius: '10px',
                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4)'
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontWeight: 600
                }}
              >
                {item.position}
              </p>
            </div>)
          }
          
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem'
        }}
      >
        <h1>Ordenados</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {orderedItems?.map(item =>
            <div
              style={{
                width: 100, 
                height: 100,
                backgroundColor: item.color,
                display: 'grid',
                placeItems: 'center',
                borderRadius: '10px',
                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4)'
              }}
            >
              <p
                style={{
                  color: 'white',
                  fontWeight: 600
                }}
              >
                {item.position}
              </p>
            </div>)
          }
          
        </div>
      </div>
    </div>
  )
}
