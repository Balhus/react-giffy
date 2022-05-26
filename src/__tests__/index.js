import React from 'react';
import { screen, render, fireEvent, waitForElement } from '@testing-library/react';
import App from '../App';

//waitForElement esta deprecated asi que mejor usar findByText o findBy algo, tambien wait que esta en la nueva version, ha de ser async tambien
test('Home working as expected', async () => {
    const { container } = render(<App />);
    const gifLink = await waitForElement(() => container.querySelector('.Gif-link'));
    expect(gifLink).toBeVisible()
});

//screen coge todo lo que genera el render, y despues se pueden usar los metodos encima de ello.
//findByRole coge todos los elementos que tengan el rol descrito. Un elemento HTML aunque no le demos un rol, tiene uno por defecto.
test('search from could be used', async () => {
    render(<App />);
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button')

    fireEvent.change(input, { target: { value: 'Matrix' } })
    fireEvent.click(button)

    const title = await screen.findByText('Matrix')
    expect(title).toBeVisible();
});

