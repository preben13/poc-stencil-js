// horizontal-tab.tsx
import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'my-horizontal-tab',
  styleUrl: 'my-horizontal-tab.scss',
  shadow: false,
})
export class MyHorizontalTab {
  @Prop() tabs: string;
  @Prop() innerTabs: string[];
  @State() activeTab: string = '';



  @Watch('tabs')
  parseTabs() {
    if (this.tabs) {
      this.innerTabs = JSON.parse(this.tabs);
    }
  }

  componentWillLoad() {
    this.parseTabs();
    if (this.tabs && this.tabs.length > 0) {
      this.activeTab = this.tabs[0];
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  render() {
    return (
      <div class="horizontal-tab">
        <div class="tab-buttons">
          {this.innerTabs.map((tab) => (
            <button
              class={`tab-button ${this.activeTab === tab ? 'active' : ''}`}
              onClick={() => this.setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div class="tab-content">
          <slot name={this.activeTab}></slot>
        </div>
      </div>
    );
  }
}
