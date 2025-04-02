import 'express-session';
import { User } from '../shared/schema';

declare module 'express-session' {
  interface SessionData {
    userId: number;
  }
}

declare global {
  namespace Express {
    interface User {
      id: number;
      username: string;
      email: string;
      role: string;
      artistName?: string;
      packageType?: string;
    }
  }
}