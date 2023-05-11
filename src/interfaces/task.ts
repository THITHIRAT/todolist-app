export interface ITodo {
  completed: boolean;
  id: string;
  title: string;
}

export interface IActionButtonList {
  label: string;
  textColor?: string;
  onClick: () => void;
}