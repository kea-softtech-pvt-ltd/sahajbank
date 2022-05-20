import { selector } from 'recoil';
import { doctorIdState } from '../DoctorId';

export const doctorIdPass = selector({
  key: 'doctorIdPass',
  get: ({ get }) => {
    const data = get(doctorIdState);
   
    return data;

  },
});