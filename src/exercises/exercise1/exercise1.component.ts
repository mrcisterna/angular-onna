import { Component, OnInit } from '@angular/core';

const a: any[] = [
  { id: 'abc', value: 'ABC', selected: true },
  { id: 'def', value: 'DEF', selected: false },
  { id: 'ghi', value: 'GHI', selected: true },
];

@Component({
  selector: 'app-exercise1',
  template: `<h1>Original array</h1>
  <div><pre>{{originalItems | json}}</pre></div>
  <h1>Result</h1>
  <div><pre>{{selectedItems | json}}</pre></div>`,
})
export class Exercise1Component implements OnInit {

  private filteredItems: any[];
  originalItems: any[] = a;
  selectedItems: any;

  ngOnInit(): void {
    this.filteredItems = this.filterSelectedItems();
    this.selectedItems = this.convertArrayToObject();
  }

  private filterSelectedItems(): any[] {
    return a.filter(item => item.selected);
  }

  private convertArrayToObject(): any[] {
    return this.filteredItems.reduce((c, p) => ({ ...c, [p.id]: p.value }), {});
  }
}
