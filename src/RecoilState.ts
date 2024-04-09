import { atom } from 'recoil';


interface IToolCode {
    toolcode: string;
}
export const toolcodeValueSate = atom<IToolCode>({
    key: 'toolcode',
    default: {
        toolcode: '',
    }
})