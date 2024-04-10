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

export const toolcodeListState = atom<string[]>({
    key: 'toolcodelist',
    default: ["AP-TG-01-01", "AP-TG-01-02", "AP-TG-10-01", "AM-EM-02-01", "AM-EM-01-01", "AP-SR-04-01", "AP-SR-07-01", "AP-RD-05-01", "AP-LA-04-01", "AP-TG-01-01", "AP-TG-01-02", "AP-TG-10-01", "AM-EM-02-01", "AM-EM-01-01", "AP-SR-04-01", "AP-SR-07-01", "AP-RD-05-01", "AP-LA-04-01"]
})
