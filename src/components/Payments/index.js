import Payments from './Payments';
import { connect } from '../../store';

export default connect(['settings', 'info'])(Payments);
