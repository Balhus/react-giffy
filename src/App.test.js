import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//Al tener el LazyLoad en el Home, hemos convertido la ruta en asincrona, 
//por lo que hace falta ponerle el async, el await y usar findByText que es un metodo asíncrono
test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});
