import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Destination from "../Components/Destination"


Enzyme.configure({ adapter: new Adapter() });

describe('Destination Component', () => {
   it('should add the selected Destination to the state', () => {
      const planet = []
      const selectDestinationInstance = shallow(<Destination/>)
      const selectDOM = selectDestinationInstance.find("#demo-simple-select")
      selectDOM.simulate('change', {'target' : {name : "Donlon"}})
      expect(planet[0]).toequal("Donlon")
   })
})

