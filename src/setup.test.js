import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
chai.should();

configure({ adapter: new Adapter() });
