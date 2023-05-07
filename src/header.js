import { Component } from "react";
import moment from "moment/moment";

class Header extends Component {
    render() {
        let indonesia = require('moment/locale/id')
        moment.updateLocale('id', indonesia);
        return (
            <div>
                <i class="bi bi-calendar-check flex justify-center mt-16 text-6xl "></i>
                <h3 class="text-3xl text-center mt-12">Aplikasi Aktivitas Harian</h3>
                <p className="text-center mt-5">{moment().format('dddd')} {moment().format('LLL')}</p>
            </div>
        )
    }
}
export default Header;