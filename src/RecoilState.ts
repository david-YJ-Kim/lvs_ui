import { atom, selector } from "recoil";

interface IToolCode {
  toolcode: string;
}
export const toolcodeValueSate = atom<IToolCode>({
  key: "toolcode",
  default: {
    toolcode: "",
  },
});

export const toolcodeListState = atom<string[]>({
  key: "toolcodelist",
  default: [
    "AP-TG-01-01",
    "AP-TG-01-02",
    "AP-TG-10-01",
    "AM-EM-02-01",
    "AM-EM-01-01",
    "AP-SR-04-01",
    "AP-SR-07-01",
    "AP-RD-05-01",
    "AP-LA-04-01",
    "AP-TG-01-01",
    "AP-TG-01-02",
    "AP-TG-10-01",
    "AM-EM-02-01",
    "AM-EM-01-01",
    "AP-SR-04-01",
    "AP-SR-07-01",
    "AP-RD-05-01",
    "AP-LA-04-01",
    "AM-EM-01-01",
    "AP-SR-05-01",
    "AP-SR-08-01",
    "AP-DD-05-01",
    "AP-DA-04-01",
  ],
});

export const toolcodeListStartWithSelector = selector<string[]>({
  key: "toolcodeListStartWithSelector",
  get: ({ get }) => {
    const toolcodeList = get(toolcodeListState);
    return toolcodeList.filter((toolcode) => toolcode.startsWith("AP")); // Change "AP" to your desired prefix
  },
});
