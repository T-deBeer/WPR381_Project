export interface TextboxProps{
    text: string;
    onChange?: () => void;
  }
  
export interface User {
    sunrise: Date;
    lastName: string;
  }
  
export interface BackendData {
    users: User[];
  }
  