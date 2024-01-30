import React from 'react';

const Categories = () => {



  const divStyle = {
backgroundColor: "#f3ac30"
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100px', // Adjust the width as needed
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '100px',
    height: '120px',
    marginBottom: '16px',
  };


  return (
    <div className='flex  justify-evenly flex-wrap my-4 bg-yellow-100 pb-6' >
              <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c5222f69-248a-426b-9bb0-5b7e2def4c80.png?format=png" alt="Fairs" style={imageStyle} />
      </div>
      <div style={containerStyle} >
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/828796e1-afbf-4ea5-886d-8ffa42e1e565.png?format=avif" alt="Fairs" style={imageStyle} />
      </div>
      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2f1613c7-7f2a-46fc-8c14-28e147eae226.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>

      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b3954f54-1648-47ef-8644-347d60eb9b98.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>
      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/9df57943-68dd-4d30-9388-565517beb03b.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>
      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/5e1148a5-1a80-4f20-8b97-eebed890cb38.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>
      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/9af4c66e-035c-4690-8e00-e977f07dafcc.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>

      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/ebefe3d4-e699-4171-b2a9-a71ba9213b03.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>
      

      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/1363f341-c643-4cbb-8820-71c4e5319d87.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>
      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/6d46133a-c8ab-4a10-b9c8-abe3a5333c30.png?format=avif" alt="Fairs" style={imageStyle} />

      </div>
      <div style={containerStyle}>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/a3044b45-7d6e-4fb9-9509-b0efc858b8c1.png?format=avif" alt="Fairs" style={imageStyle} />
      </div>
    </div>
  );
}

export default Categories;
