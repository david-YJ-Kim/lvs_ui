import { atom, selector, selectorFamily } from "recoil";

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
  default: [],
});

export const toolcodeListStartWithSelector = selectorFamily<string[], string>({
  key: "toolcodeListStartWithSelector",
  get:
    (prefix: string) =>
      ({ get }) => {
        const toolcodeList = get(toolcodeListState);
        return toolcodeList.filter((toolcode) => toolcode.startsWith(prefix)); // Change "AP" to your desired prefix
      },
});
