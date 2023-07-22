export interface Credentials {
    email: string;
    password: string;
  }

export interface CourseResponse {
    id: number;
    title: string;
    desc: string;
    provider: string;
    moduleTime: number;
    _count: {
      module: number;
    };
  }