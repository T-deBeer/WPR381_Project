export interface TextboxProps{
    text: string;
    onChange?: () => void;
  }
  
export interface User {
    firstName: string;
    lastName: string;
  }
  
export interface BackendData {
    users: User[];
  }
  