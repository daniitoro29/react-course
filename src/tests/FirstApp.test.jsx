import {render} from '@testing-library/react';
import {FirstApp} from '../FirstApp';

describe('Pruebas firstApp', () => {
    test('Debe hacer match con el snapshot', () => {
        const title = 'title';
        const subtitle = 'hello';
        const nombre = 'Cris';
       const {container} = render(<FirstApp title={title}  subtitle={subtitle}  nombre={nombre}/>)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el titulo en un h1', () => {
        const title = 'title';
        const subtitle = 'hello';
        const nombre = 'Cris';
       const {container, getByText, getByTestId} = render(<FirstApp title={title}  subtitle={subtitle}  nombre={nombre}/>)
       expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title)
    });

    test('', () => {
        
    });
    
    
    
});
