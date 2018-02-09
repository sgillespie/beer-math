import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import sinonChai from 'sinon-chai';

chai.use(chaiImmutable);
chai.use(sinonChai);
chai.should();

configure({ adapter: new Adapter() });
