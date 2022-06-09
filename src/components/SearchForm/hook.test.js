import { act, renderHook } from '@testing-library/react-hooks';
import useForm from './hook'


const setup = (params) => renderHook(() => useForm(params))

test('should change keyword', () => {
    const { result } = setup('', 'g', 'en')
    //Como es asincrono el update de un state, lo hacemos con act para que en el expect el eatdo este actualizado
    act(() => {
        result.current.updateKeyword('batman')
    })

    expect(result.current.keyword).toBe('batman')
})

test('should use initial values', () => {
    const { result } = setup('matrix', 'g', 'en')

    expect(result.current.keyword).toBe('matrix')
})

//TODO
test('should not change keyword when emmpty', () => {
    const { result } = setup('', 'g', 'en')
    
    act(() => {
        result.current.updateKeyword('')
    })

    expect(result.current.keyword).toBe('')
})