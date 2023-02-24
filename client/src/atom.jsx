import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export const loginSuccess=atom({
    key:"loginSuccess",
    default:false,
    effects_UNSTABLE: [persistAtom]
});