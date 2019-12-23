import React from 'react'
import { shallow } from 'enzyme'
import ExpenDashBoardPage from '../../components/ExpenDashboardPage'

test('should render ExpenDashBoardPage correctly', () => {
    const wrapper = shallow(<ExpenDashBoardPage />);
    expect(wrapper).toMatchSnapshot();
});