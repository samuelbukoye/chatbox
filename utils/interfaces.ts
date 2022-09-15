export interface IMessage {
  user: string;
  text: string;
}

export type setStringStateType = React.Dispatch<React.SetStateAction<string>>;
export type setBooleanStateType = React.Dispatch<React.SetStateAction<boolean>>;
export type setNumberStateType = React.Dispatch<React.SetStateAction<number>>;
