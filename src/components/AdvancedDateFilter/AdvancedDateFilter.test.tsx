import AdvancedDateFilter from 'components/AdvancedDateFilter/AdvancedDateFilter';
import {configTests} from 'core/config/config-tests';
import {DateFilter} from 'core/filters';
import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';

describe('AdvancedDateFilter', () => {
  it('renders without crashing', () => {
    configTests()
      .then(() => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter>
          <AdvancedDateFilter filter={new DateFilter()}/>
        </MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
  });
});
