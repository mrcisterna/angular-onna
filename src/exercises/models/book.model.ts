export class Book {

  title: string;
  author: string;
  status: string;

  constructor(title: string, author: string, status?: string) {
    this.title = title;
    this.author = author;
    this.status = status || '';
  }

  getTitle = (): string => {
    return this.title;
  }

  getAuthor = (): string => {
    return this.author;
  }

  getStatus = (): string => {
    return this.status;
  }

  setStatus(status: string): void {
    this.status = status;
  }
}
