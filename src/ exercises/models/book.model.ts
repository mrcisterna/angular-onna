export class Book {
  private _title: string;
  private _author: string;
  private _status: string;

  title: string;
  author: string;
  status?: string;

  getTitle(): string {
    return this._title;
  }

  getAuthor(): string {
    return this._author;
  }

  getStatus(): string {
    return this._status;
  }
}
